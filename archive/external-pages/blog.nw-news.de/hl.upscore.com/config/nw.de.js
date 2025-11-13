function load() {
    var domain = "nw.de";
    var server_endpoint = "https://hl.upscore.com/"; // "http://localhost:5000/Config/" //
    var titleSelector = "[data-upscore-title]";
    var positionNodes = Array.prototype.slice.call(document.querySelectorAll('[data-upscore-object-id]'), 0);
    var positionMap =  new Map(positionNodes.map( node => [node.dataset.upscoreObjectId,node]));

    function debugLog(...args){
        // args.unshift(new Date().toISOString().slice(11,23) + " UpScore-HLT: ");
        // console.log.apply(null, args); // FOR DEBUGGING
    }

    var positions_observer = new IntersectionObserver(on_element_visible, { threshold: 0.8 });
    function on_element_visible(entries, observer) {
        entries.forEach(function(entry){
            if (entry.intersectionRatio < 0.8) return;
            var position = entry.target;
            observer.unobserve(position);
            var data = getHeadlineData(position);
            debugLog("SEEN HEADLINE", data);
            sendMetricsRequest("Statistics/View", data);
        });
    }

    function getHeadlineData(element) {
        var object_id = element.dataset.upscoreObjectId;
        var headline = Number(element.dataset.upscoreHeadlineId);
        return { object_id, headline, domain: domain };
    }

    function element_clicked(event) {
        var element = event.target;
        while (element) {
            if (element.dataset.upscoreObjectId) break;
            element = element.parentElement;
        }
        var data = getHeadlineData(element);
        debugLog("Clicked HEADLINE: ", data);
        sendMetricsRequest("Statistics/Click", data);
    }

    // modifyTestedHeadlines(config.tests);
    // modifyHeadlines(config.headlines);

    // function evaluateTests(){} 
    // triggered on page_view & on_load?
    // check if it was already run (on testing positions)

    fetch(server_endpoint + "configuration/" + domain).
    then(res => res.json()).
    then(config => {
        // debugLog("CONFIG: ", config);
        modifyTestedHeadlines(config.tests);
        modifyHeadlines(config.headlines);
    });

    function modifyTestedHeadlines(tests){ 
        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            var nodeElement = positionMap.get(test.object_id);
            if (!nodeElement) {
                //console.log("Headline test article not found: ", test);
                continue;
            }
            //  position.element.style.border = "2px solid red"; // FOR TEST
            positions_observer.observe(nodeElement);
            nodeElement.addEventListener('click', element_clicked);
            var randomHeadlineIndex =  weightedRandomIndex(test.headlines.map(x => x.ratio));
            var headline_change = test.headlines[randomHeadlineIndex];
            // set headline
            nodeElement.dataset.upscoreHeadlineId = headline_change.id;
            debugLog("Set headline for test: ", headline_change, nodeElement);
            if (headline_change.id != 0) { // leave original headline as is
                changeArticleHeadline(nodeElement, headline_change.text);
            }
        }
    }

    function weightedRandomIndex(weights) {
        // Ratio sum for headline-test is 100 
        const randomNum = Math.random() * 100;
        let cumulativeSum = 0;    
        for (let i = 0; i < weights.length; i++) {
            cumulativeSum += weights[i];
            if (randomNum < cumulativeSum) {
                return i;
            }
        }
        return weights.length - 1;
    }

    function modifyHeadlines(headlines){
        for (var i = 0; i < headlines.length; i++) {
            var new_headline_data = headlines[i];
            var nodeElement = positionMap.get(new_headline_data.object_id);
            if (!nodeElement) {
                //console.log("Headline test article not found: ", new_headline_data);
                continue;
            }
            //debugLog("Changing headline: ", new_headline_data, nodeElement);
            //nodeElement.style.border = "2px solid blue"; // FOR TEST
            changeArticleHeadline(nodeElement, new_headline_data.text);
        }    
    }

    function changeArticleHeadline(nodeElement, newText){
        var titleElement = nodeElement.querySelector(titleSelector);
        if(titleElement){
            titleElement.innerText = newText;
        }
    }
 
    function sendMetricsRequest(path, data) {
        navigator.sendBeacon(server_endpoint + path, JSON.stringify(data));
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
} else {  
    load();
}