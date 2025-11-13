let options, pages, resetButton, sortButtons;

// setup

function setupFilterEvents() {
    options = document.querySelectorAll(".filterMenu input[type=checkbox]");
    pages = document.querySelectorAll(".container a.page");
    if (!pages || pages.length == 0) {
        pages = document.querySelectorAll("tr[id^=page]");
    }
    resetButton = document.querySelector(".resetFilters");
    sortButtons = document.querySelectorAll(".sortingOptions button");

    if (window.location.pathname.includes("/cms/")) {
        let paragraphs = document.querySelectorAll(".filterMenu > p");
        paragraphs.forEach(elem => {
            elem.remove();
        });
        document.querySelector(".sortingOptions").remove();
    }

    // aply any filters from URL
    let params = window.location.search.split("&");
    params[0] = params[0].substr(1,9999);
    params.forEach((param) => {
        let prop = param.split("=")[0];
        let val = param.split("=")[1];

        let elem = document.querySelector("input[name='" + prop + "'][value='" + val + "']");
        if (elem) { elem.checked = true; }
    });

    filterPages();

    options.forEach((option) => {
        option.addEventListener("change", filterPages);
    });

    sortButtons.forEach(button => {
        button.addEventListener("click", sortButtonHandler);
    });

}

window.addEventListener("load", setupFilterEvents);

// filters

function resetFilters() {
    options.forEach((option) => {
        option.checked = false;
    });
    filterPages();
}

function filterPages() {
    // Get all checked filters grouped by property
    let checkedFilters = {};
    let anyFilters = false;

    options.forEach((option) => {
        if (option.checked) {
            anyFilters = true;
            let prop = option.name;
            let val = option.value;

            if (!checkedFilters[prop]) {
                checkedFilters[prop] = [];
            }
            checkedFilters[prop].push(val);
        }
    });

    // Filter pages
    pages.forEach((page) => {
        let shouldShow = true;

        if (anyFilters) {
            // Check if page matches ALL filter categories
            for (let prop in checkedFilters) {
                let pageProps = page.dataset[prop];
                if (pageProps) {
                    pageProps = pageProps.split(/[\s,]+/);
                } else {
                    pageProps = [];
                }

                // Check if page has at least one value from this filter category
                let hasMatch = checkedFilters[prop].some(val => pageProps.includes(val));
                if (!hasMatch) {
                    shouldShow = false;
                    break;
                }
            }
        }

        // Show or hide the page
        if (shouldShow) {
            page.classList.remove("hidden");
        } else {
            page.classList.add("hidden");
        }
    });

    if (!anyFilters) {
        resetButton.classList.add("hidden");
        pages.forEach((page) => {
            page.classList.remove("hidden");
        });
    } else {
        resetButton.classList.remove("hidden");
    }

}

// sorting

function sortButtonHandler(event) {
    sortType = event.currentTarget.dataset.order;
    sortPages(sortType);
}

function sortPages(sortType) {
    const container = document.querySelector('.container .flex');
    const items = Array.from(container.querySelectorAll('.page'));

    // Sort based on the specified type
    items.sort((a, b) => {
        const aOrder = parseInt(a.dataset.order) || 0;
        const bOrder = parseInt(b.dataset.order) || 0;
        const aYear = parseInt(a.dataset.year) || 0;
        const bYear = parseInt(b.dataset.year) || 0;

        switch(sortType) {
            case 'default':
                return aOrder - bOrder;

            case 'year-asc':
                // Year ascending, then order ascending as fallback
                if (aYear !== bYear) {
                    return aYear - bYear;
                }
                return aOrder - bOrder;

            case 'year-desc':
                // Year descending, then order descending as fallback
                if (aYear !== bYear) {
                    return bYear - aYear;
                }
                return bOrder - aOrder;

            default:
                return 0;
        }
    });

    // Clear container and re-append sorted items
    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));

    // set apropriate button to active
    sortButtons.forEach(button => {
        button.classList.remove("active");
    });

    document.querySelector(".sortingOptions button[data-order='" + sortType + "']").classList.add("active");
}

function toggleFilters() {
    document.querySelector('.filterMenu').classList.toggle('hidden');
    document.querySelector('.toggleFilters').classList.toggle('hidden');
}
