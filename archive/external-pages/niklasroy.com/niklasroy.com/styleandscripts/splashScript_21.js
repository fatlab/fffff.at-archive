/*

TODO:
During scroll back up: mobile ff sometimes does not show splash screen again
Keep random fixed y-pos but behind tiles
Check categories in content array

FIXED:
video fade to grey jumps on mobile ff / also causes problems on mobile chrome
filter buttons don't work on mobile  ff & chrome
sometimes there's still a light grey transparent bgnd with video behind on randomizer bottom

MUST UPDATE:
New method of measuring w & h (mobile firefox proof) and for rendering borderwidth
has to be copied to -> article js and randomizer js

article and randomizer js to load data from new object array database

*/


let verbose = 0;        //turn debug overlay & console logs on and off
let numberOfElements = 0; //number of elements in content array (zero-based; thus value in this let is one less than actual number of elements)
let w, h, ratio;              // width and height of viewport - will be calculated when loaded & resized; w/h ratio
let cellSize = 1;       //size of a cell in pixel, incl space on the right side and on bottom
let maxRow = 0;         //stores the number of the lowest row that's filled with content
let colors = ["Orange", "BlueViolet", "DeepPink", "DarkTurquoise", "Fuchsia", "Gold", "HotPink", "MediumBlue", "OrangeRed", "DodgerBlue", "MediumVioletRed", "LimeGreen"];
let xPosition = [0];    //stores positions of each menu element (top left corner)
let yPosition = [0];    //standard y-position for menu item
let imgW = [0];         //stores original pixel-width and -height of image in item
let imgH = [0];
let cellFormat = [''];  //stores whether the content of this cell has 'landscape' or 'portrait' format
let itemVisible = [0];  //stores whether an item is visible in viewport (=1), or if it is above outside (=2) or below outside (=0)
let imgIsLoaded = [0];  //stores whether an image has been loaded already
let scrollPos = 0;      //stores y - scrolling position
let pScrollPos = -1;     //stores previous y - scrolling position
let videoFormat = '';   //format of bgnd video - can be 'landscape' or 'portrait'
let visibleContent = []; // array of currently visible items ( filter apllied )

let borderWidth = 5;        //space between cells and border width around images

let selectedTag = null; // selected tag in tag filter
let allTags = new Set();
let tagCounts = new Map(); // stores count of each tag across projects


let debugDiv, fadeScrollContainer, banner, underline, buttons, filterContainer, filterDiv, randomMessage, menuTop, menuBottom,
    menuDiv, w100p, measureB, measureR, splash, tagBarWrapper, bar, bgndVideo, scrollRight, scrollLeft, tagBar, videoContainer; // html divs

///////////////////////////////////////////////////////////////////--------------------------RUNS WHEN PAGE IS LOADED
function pageLoad() {
    console.log("Hello and welcome to my website :)");
    console.log("verbose=" + verbose);

    // get DOM references
    debugDiv = document.getElementById("debug");
    fadeScrollContainer = document.getElementById("fadeScrollContainer");
    banner = document.getElementById("banner");
    underline = document.getElementById("underline");
    tagBarWrapper = document.getElementById("tagBarWrapper");
    filterContainer = document.getElementById("filterContainer");
    filterDiv = document.getElementById("filter");
    randomMessage = document.getElementById("randomMessage");
    menuTop = document.getElementById("menuTop");
    menuBottom = document.getElementById("menuBottom");
    menuDiv = document.getElementById("menu");
    w100p = document.getElementById("w100p");
    measureB = document.getElementById("measureB");
    measureR = document.getElementById("measureR");
    splash = document.getElementById("splash");
    buttons = document.getElementById("buttons");
    videoContainer = document.getElementById("videoContainer");
    tagBar = document.getElementById("tagBar");
    scrollLeftButton = document.getElementById("scrollLeft");
    scrollRightButton = document.getElementById("scrollRight");
    videoElement = document.getElementById("bgndVideo");

    // Validate critical elements exist
    if (!w100p || !menuDiv || !fadeScrollContainer) {
        console.error("Critical DOM elements missing!");
        return;
    }

    // calculate number of elements in array
    numberOfElements = contentObject.length;
    // set visibleContent to all items initially
    visibleContent = [...contentObject];

    // extend lenght of arrays
    for (let i = 0; i < numberOfElements; i++) {
        xPosition.push(0);
        yPosition.push(0);
        imgW.push(0);
        imgH.push(0);
        cellFormat.push('');
        itemVisible.push(0);    // stores where the menu item is relative to the viewport. 0=below, 1=inside, 2=above
        imgIsLoaded.push(0);    // stores whether an image is loaded and replaced (1) or not (0)
    }
    calculateSizes();           // get width & height of viewport
    // defer layoutSplash to next frame
    requestAnimationFrame(() => {
        layoutSplash();
        layoutGrid();
        layoutFilter();
        initTagBar();
        scroll();
    });


    debug();
    window.addEventListener('resize', reSized); // calls reSized without a debounce timer
    window.addEventListener('scroll', scroll); // calls scroll  
    setInterval(safetyCheck, 500); // call safety check every 500ms -> makes sure that all is faded well

}


///////////////////////////////////////////////////////////////////--------------------------IS CALLED WHEN WINDOW IS RESIZED

function reSized() {
    calculateSizes();   // get width & height of viewport
    layoutSplash();     // layout full size splash screen
    layoutGrid();       // handles menu grid layout and positioning of footer below
    layoutFilter();     // handles filter layout
    renderTagBar();     // re-render the tag buttons

    layoutTagScrollButtons();
    updateScrollButtonsVisibility();
    scroll();           // handles image loading, depending of visibility of item in viewport
    debug();
}


///////////////////////////////////////////////////////////////////--------------------------GET W & H OF VIEWPORT, CALCULATE ALL RELEVANT SIZES

function calculateSizes() {

    if (verbose === 1) { console.log('getSize: '); }
    //measure width of viewport with 100% wide div
    w = w100p.getBoundingClientRect().width;
    if (w < 340) { w = 340; }

    h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    // Select measurement element B which is positioned in the bottom right corner via CSS
    const rect = measureB.getBoundingClientRect(); // Get its bounding rectangle

    // Calculate bottom-right coordinates
    const measureW = rect.right;  // x-coordinate
    const measureH = rect.bottom; // y-coordinate

    // Use the smaller height and width between normal measurement and #measureWH
    w = Math.min(w, measureW);
    h = Math.min(h, measureH);

    ratio = w / h;

    if (verbose === 1) { console.log('w: ' + w + '  -  h: ' + h); }
}


///////////////////////////////////////////////////////////////////-------------------------- LAYOUT AND DISPLAY FULL SCREEN SPLASH
let bannerFontSize, underlineFontSize, menuButtonFontSize, itemFontSize, itemFontSizeUnderline, randomFontSize, tagFontSize;
function layoutSplash() {
    if (verbose === 1) { console.log('layoutSplash...'); }
    fadeScrollContainer.style.display = 'block';

    if (ratio > .75) { // landscape-ish

        bannerFontSize = w / 200;
        underlineFontSize = w / 600;
        menuButtonFontSize = w / 750;
        itemFontSize = w / 1350;
        itemFontSizeUnderline = w / 1900;
        tagFontSize = (w + h) / 1600;
        randomFontSize = itemFontSizeUnderline * 2;
        borderWidth = getRemInPx() * w / 7000;
        banner.innerHTML = 'NIKLAS&nbsp;ROY';

    } else { // portrait-ish

        bannerFontSize = w / 100;
        underlineFontSize = w / 270;
        menuButtonFontSize = w / 250;
        itemFontSize = w / 250;
        itemFontSizeUnderline = w / 370;
        tagFontSize = w / 300;
        randomFontSize = itemFontSizeUnderline * .9;
        borderWidth = getRemInPx() * w / 2000;
        banner.innerHTML = 'NIKLAS<br>ROY';
    }


    bannerFontSize = Math.min(bannerFontSize, 9);  // ................ set maximum fontsizes (top clamp)
    underlineFontSize = Math.min(underlineFontSize, bannerFontSize * .7);

    menuButtonFontSize = Math.max(menuButtonFontSize, .8); // ............ set minimum font sizes (bottom clamp)
    itemFontSize = Math.max(itemFontSize, 1.5);
    itemFontSizeUnderline = Math.max(itemFontSizeUnderline, 1);

    banner.style.fontSize = `${bannerFontSize}rem`;
    banner.style.letterSpacing = `${bannerFontSize * 0.15}rem`;
    // banner.style.paddingTop = `${underlineFontSize * 1.2}rem`;

    // ............. underline
    underline.style.fontSize = `${underlineFontSize}rem`;
    underline.style.lineHeight = `${underlineFontSize * 1.3}rem`;
    underline.style.letterSpacing = `${underlineFontSize * 0.1}rem`;
    underline.style.width = `${w * .7}px`;
    //  underline.style.padding = `0 ${w / 8}px ${underlineFontSize * 1.5}rem ${w / 8}px`;

    // ............. buttons (container)
    buttons.style.gap = `${borderWidth * 4}px`;
    buttons.style.flexDirection = (ratio > .75) ? "row" : "column"; //   buttons in a line - buttons list

    const menuButtons = document.querySelectorAll('.menu-button');  // ..... menu buttons
    menuButtons.forEach(button => {
        button.style.width = (ratio > .75) ? `${(w / 5)}px` : `${(w * .7)}px`;  //   buttons in a line - buttons list
        button.style.lineHeight = `${menuButtonFontSize * 1.3}rem`;
        button.style.fontSize = `${menuButtonFontSize}rem`;
        button.style.letterSpacing = `${menuButtonFontSize * 0.1}rem`;
        button.style.border = `${borderWidth}px solid white`;
    });


    // position elements vertically

    const totalElementHeight = banner.offsetHeight + underline.offsetHeight + buttons.offsetHeight;

    const spaceForGaps = h - totalElementHeight; // compute available space for gaps

    if (ratio > .75) { // landscape-ish
        const topSpace = (spaceForGaps / 6);
        const bottomSpace = (spaceForGaps / 4);
        buttons.style.top = `${h - buttons.offsetHeight - bottomSpace}px`;         // buttons vertical positioning
        underline.style.top = `${(h - underline.offsetHeight) / 2}px`;             // underline vertical positioning
        banner.style.top = `${topSpace}px`;                                        // banner vertical positioning
    } else {          // portrait-ish
        const topSpace = (spaceForGaps / 6);
        const bottomSpace = Math.max((spaceForGaps / 3), h / 10);                     // weird bug in firefox mobile! spaceForGaps might become negative
        const availableSpace = h - (topSpace + banner.offsetHeight + buttons.offsetHeight + bottomSpace + underline.offsetHeight);
        const underlineTop = topSpace + banner.offsetHeight + availableSpace / 2.5;
        buttons.style.top = `${h - buttons.offsetHeight - bottomSpace}px`;         // buttons vertical positioning 
        underline.style.top = `${underlineTop}px`;                                 // underline vertical positioning
        banner.style.top = `${topSpace}px`;                                        // banner vertical positioning
    }

    //fade in splash text
    setTimeout(function () {
        splash.style.opacity = 1;
    }, 500);
    // Load background video with improved handling
    loadBackgroundVideo();
    //make splash screen invisible if it's out of viewport
    if (scrollPos >= h) { fadeScrollContainer.style.display = 'none'; }
}

function getRemInPx() {
    const el = document.createElement("div");
    el.style.width = "10rem";  // measure a bigger chunk
    el.style.height = "0";
    el.style.opacity = "0";
    el.style.position = "absolute";
    el.style.pointerEvents = "none";
    document.body.appendChild(el);

    const width = el.getBoundingClientRect().width;
    document.body.removeChild(el);

    return width / 10; // average out rounding
}
///////////////////////////////////////////////////////////////////--------------------------LAYOUT & DISPLAY GRID MENU
function layoutGrid() {

    if (verbose === 1) { console.log('layoutGrid...'); }

    menuTop.style.height = `${h}px`;

    numberOfElements = visibleContent.length;

    let columns = Math.floor((w - borderWidth) / 270);                  //calculate number of columns (a column should be minimally 270px wide)

    if (ratio <= .75) columns = 1;

    cellSize = (w - borderWidth) / columns;                             //size of a cell in pixel, incl space on the right side and on bottom
    let rows = Math.ceil((numberOfElements * 2) / columns) + 2;       //number of rows in array (this includes extra rows in order to make sure that there's really enough space for the content)
    maxRow = 0;                                                 //reset maximum of rows

    //define two-dimensional grid-array.
    //this will contain index numbers of menu elements.
    //always two neighboring cells will contain the same index number
    let grid = new Array(columns);
    for (let i = 0; i < columns; i++) {
        grid[i] = new Array(rows);
    }

    //fill grid array with '0's
    for (let xi = 0; xi < columns; xi++) {
        for (let yi = 0; yi < rows; yi++) {
            grid[xi][yi] = 0;
        }
    }

    if (columns > 1) {
        //in case there are at least two columns
        //fill grid with content numbers (always two neighboring cells get the same number)
        let contentCount = 1;
        let PortraitToggle = 1;
        let decisionOffset = hash(selectedTag);

        //go through all cells in 2D array and merge cells either as portrait (w/ right neighbor) or landscape (w/ bottom neighbor); write an index number in all cells
        for (let yi = 0; yi < rows - 1; yi++) {
            for (let xi = 0; xi < columns; xi++) {

                if ((xi + yi + decisionOffset) % 5 === 0 || (xi + yi + decisionOffset) % 3 === 0 || (xi + yi + decisionOffset) % 7 === 0 || (xi + yi + decisionOffset) % 13 === 0) { //just a weird system to distibute landscape/portrait cells
                    PortraitToggle = 0; //landscape
                } else {
                    PortraitToggle = 1; //portrait
                }
                if (grid[xi][yi] === 0) {
                    //empty cell
                    if (xi < columns - 1 && grid[xi + 1][yi] === 0) {
                        //right neighbor cell also empty
                        if (PortraitToggle === 0 && contentCount <= numberOfElements) {
                            //fill two landscape cells with an index number
                            grid[xi][yi] = contentCount;
                            grid[xi + 1][yi] = contentCount;
                            //if this is not the lowest row, saved in maxRow, then save it!
                            if (maxRow < yi) { maxRow = yi; }
                            contentCount++;
                        }
                    }

                    if (grid[xi][yi] === 0 && contentCount <= numberOfElements) {
                        //fill two portrait cells with an index number
                        grid[xi][yi] = contentCount;
                        grid[xi][yi + 1] = contentCount;
                        //if this is not the lowest row, saved in maxRow, then save it!
                        if (maxRow < yi + 1) { maxRow = yi + 1; }
                        contentCount++;
                    }
                }
            }
        }
        //calculate x and y positions for each menu element plus store the format of the element (landscape/portrait)
        for (let yi = 0; yi < rows; yi++) {
            for (let xi = 0; xi < columns; xi++) {
                if (grid[xi][yi] > 0) { //there's content in this cell
                    if (xi < columns - 1 && grid[xi][yi] === grid[xi + 1][yi]) { //neighboring cell on the right has same content index number
                        //landscape cell - merged with right neighbor
                        xPosition[grid[xi][yi] - 1] = xi * cellSize + borderWidth;
                        yPosition[grid[xi][yi] - 1] = yi * cellSize;
                        cellFormat[grid[xi][yi] - 1] = 'landscape';
                    } else {
                        if (yi < rows - 1 && grid[xi][yi] === grid[xi][yi + 1]) { //neighboring cell below has same content index number
                            //portrait cell - merged with bottom neighbor
                            xPosition[grid[xi][yi] - 1] = xi * cellSize + borderWidth;
                            yPosition[grid[xi][yi] - 1] = yi * cellSize;
                            cellFormat[grid[xi][yi] - 1] = 'portrait';
                        }
                    }
                }
            }
        }
    } else {
        //only one column!
        let contentCount = 1;
        //go through all cells and write an index number in all cells
        for (let contentCount = 1; contentCount <= numberOfElements; contentCount++) {
            let yi = contentCount - 1;
            grid[0][yi] = contentCount - 1;           //write index of element in grid
            xPosition[grid[0][yi]] = borderWidth;       //calculate x and y positions for each menu element
            yPosition[grid[0][yi]] = yi * cellSize;
            cellFormat[grid[0][yi]] = 'square';     //store the format of the element
        }
        maxRow = numberOfElements;
    }


    // grid menu size  
    /* menuDiv.style.height = (maxRow + 1.5) * cellSize - borderWidth + h / 2 + 'px';*/
    menuDiv.style.height = (maxRow) * cellSize - borderWidth + 'px';

    //reset content of menu DIV
    menuDiv.innerHTML = '';
    //draw menu grid

    // space below menu
    menuBottom.style.height = cellSize + h + borderWidth + 'px';


    for (let i = 0; i < numberOfElements; i++) {
        drawRect(cellFormat[i], i);
    }

    //recalculate position of loaded images
    for (let i = 0; i < numberOfElements; i++) {
        if (imgIsLoaded[i] === 1) { positionImg(i, 0); }
    }

    // add "random project" message element after the grid
    randomMessage.innerHTML = `Found nothing exciting to&nbsp;click&nbsp;on!? I&nbsp;could&nbsp;take&nbsp;you to&nbsp;a&nbsp;<a href='https://www.niklasroy.com/random/'>random</a>&nbsp;project!`;
    randomMessage.style.fontSize = `${randomFontSize}rem`;
    randomMessage.style.lineHeight = `${randomFontSize * 1.3}rem`;
    randomMessage.style.padding = `0 5vw`;

    // restore z-indices
    menuDiv.style.zIndex = 100;
    randomMessage.style.zIndex = 99;
    menuBottom.style.zIndex = 98;

    //display debug info
    debug();
}

//-------------------------- helper function to create a hsh from a string
function hash(str) {
    if (str === null) {
        return 0;
    }

    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        hash = hash >>> 0; // Convert to unsigned 32-bit integer
    }
    return hash % 1000;
}
///////////////////////////////////////////////////////////////////--------------------------LAYOUT & DISPLAY FILTER BAR


function layoutFilter() {

    // Position and style outer sticky container
    filterContainer.style.width = `${w - borderWidth * 2}px`;
    filterContainer.style.position = "sticky";
    filterContainer.style.left = `${borderWidth}px`;
    filterContainer.style.top = "-.5px";
    filterContainer.style.paddingBottom = `${borderWidth}px`;

    // Style the inner filter content
    filterDiv.style.width = `${w - borderWidth * 4}px`;
    filterDiv.style.top = 0;
    filterDiv.style.padding = `${borderWidth}px`;
    filterDiv.style.position = "relative";
    filterDiv.style.background = "white";
    filterDiv.style.boxShadow = "4px 4px 8px rgba(0,0,0,.1)";
    filterDiv.style.lineHeight = `${menuButtonFontSize * 1.3}rem`;
    filterDiv.style.fontSize = `${menuButtonFontSize}rem`;
    filterDiv.style.display = "flex";
    filterDiv.style.alignItems = "center";
    filterDiv.style.gap = `${borderWidth}px`;
    filterDiv.style.background = "#fff";

    // Style the scrolling wrapper
    tagBarWrapper.style.flexGrow = 1;
    tagBarWrapper.style.overflowX = "scroll";
    tagBarWrapper.style.scrollBehavior = "smooth";
    tagBarWrapper.style.scrollbarWidth = "none";
    tagBarWrapper.style.msOverflowStyle = "none";
    tagBarWrapper.scrollTo({
        left: selectedTagX(),
        behavior: 'smooth'
    });

    if (tagBar) {
        tagBar.style.width = "max-content";
        tagBar.style.background = "transparent";
        tagBar.style.padding = `0`;
        tagBar.style.display = "flex";
        tagBar.style.flexWrap = "nowrap";
        tagBar.style.gap = `${borderWidth}px`;
        tagBar.style.alignItems = "center";
    }

    //  Style the horizontal tag scroll buttons
    const scrollButtons = document.querySelectorAll('.scrollButton');
    scrollButtons.forEach(btn => {
        btn.style.background = '#0af';
        btn.style.color = 'white';
        btn.style.fontFamily = 'futuraMR';
        btn.style.fontSize = `${itemFontSize}rem`;
        btn.style.letterSpacing = `${itemFontSize * 0.1}rem`;
        btn.style.textTransform = 'uppercase';
        btn.style.border = 'none';
        btn.style.padding = `0`; // no padding for scroll buttons
        btn.style.cursor = 'pointer';
        btn.style.boxShadow = '4px 4px 8px rgba(0,0,0,.2)';
        btn.style.transition = 'all 0.3s ease';
        btn.style.whiteSpace = 'nowrap';
        btn.style.margin = '0';
        btn.style.opacity = 1;

        // Add hover effects
        btn.onmouseover = () => {
            btn.style.background = '#fff';
            btn.style.color = '#0af';

        };
        btn.onmouseout = () => {
            btn.style.background = '#0af';
            btn.style.color = '#fff';
        };
    });
}

///////////////////////////////////////////////////////////////////--------------------------SETUP TAG SCROLL BUTTONS

function layoutTagScrollButtons() {

    if (!tagBarWrapper || !scrollLeftButton || !scrollRightButton) return;

    // Get tag button height
    const tagButton = tagBarWrapper.querySelector('.tagButton');
    const tagHeight = tagButton ? tagButton.getBoundingClientRect().height : 0;

    // Set scroll button height = tag button height 
    const scrollBtnWidth = tagHeight;//Math.floor(tagHeight * 2 / 3);

    scrollLeftButton.style.height = `${tagHeight}px`;
    scrollRightButton.style.height = `${tagHeight}px`;
    scrollLeftButton.style.width = `${scrollBtnWidth}px`;
    scrollRightButton.style.width = `${scrollBtnWidth}px`;


    const arrowSize = scrollBtnWidth * 0.8; // 80% of button width

    scrollLeftButton.innerHTML = `
<svg width="${arrowSize}" height="${arrowSize}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <polygon points="80,10 15,50 80,90" fill="white"/>
</svg>`;
    scrollRightButton.innerHTML = `
<svg width="${arrowSize}" height="${arrowSize}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <polygon points="20,10 85,50 20,90" fill="white"/>
</svg>`;

    // Flex centering ensures SVG is centered vertically & horizontally
    scrollLeftButton.style.display = 'flex';
    scrollLeftButton.style.alignItems = 'center';
    scrollLeftButton.style.justifyContent = 'center';
    scrollRightButton.style.display = 'flex';
    scrollRightButton.style.alignItems = 'center';
    scrollRightButton.style.justifyContent = 'center';

    // Scroll events
    scrollRightButton.addEventListener('click', () => {
        tagBarWrapper.scrollTo({
            left: nextTagX(),
            behavior: 'smooth'
        });
        updateScrollButtonsVisibility();
    });

    scrollLeftButton.addEventListener('click', () => {
        tagBarWrapper.scrollTo({
            left: prevTagX(),
            behavior: 'smooth'
        });
        updateScrollButtonsVisibility();
    });

    tagBarWrapper.addEventListener('scroll', updateScrollButtonsVisibility);
    updateScrollButtonsVisibility();
}

//------------------------------------------------------------------------ get the scroll position of the next tag (right)
function nextTagX() {

    const allTags = tagBarWrapper.querySelectorAll('.tagButton');      // get all tag buttons  
    let selectNext = false;
    let firstTagX = 0;

    for (let i = 0; i < allTags.length; i++) {                          // iterate over them from left to right
        const tagRect = allTags[i].getBoundingClientRect();
        if (i === 0) { firstTagX = tagRect.left; }                       // remember position of first tag for reference
        const wrapperRect = tagBarWrapper.getBoundingClientRect();
        const tagX = Math.floor(tagRect.left);

        if (selectNext) {
            // Check if this next tag's right border would be visible after scrolling
            // If the last tag's right border is already visible, cycle to first tag
            const lastTagRect = allTags[allTags.length - 1].getBoundingClientRect();
            if (Math.floor(lastTagRect.right - wrapperRect.right) < 1) {
                return 0;                                               // Cycle back to first tag position
            }
            return tagRect.left - firstTagX;                            // this is the next iteration - return the x-position of this tag 
        }
        if (tagX >= 0) { selectNext = true; }                           // this must be the first tag that's entirely visible -> next iteration will be the tag we want to scroll to
    }

    if (selectNext) {                                                   // If we've reached here and selectNext is true but no next tag was found - cycle to first tag
        return 0;
    }
}

//------------------------------------------------------------------------ get the scroll position of the previous tag (left)
function prevTagX() {

    const allTags = tagBarWrapper.querySelectorAll('.tagButton');      // get all tag buttons  
    let prevX = 0;
    let firstTagX = 0;
    for (let i = 0; i < allTags.length; i++) {                          // iterate over them from left to right
        const tagRect = allTags[i].getBoundingClientRect();
        if (i === 0) { firstTagX = tagRect.left; }                       // remember position of first tag for reference
        const wrapperRect = tagBarWrapper.getBoundingClientRect();
        const tagX = Math.floor(tagRect.left);
        if (tagX >= 0) {                                                // this must be the first tag that's entirely visible 
            if (i > 0) {                                                // if it's not the first tag
                return prevX;                                           //  -> return the pervious tag's x position
            } else {                                                    // if it's  the first tag 
                return allTags[allTags.length - 1].getBoundingClientRect().left - firstTagX; // -> return the last tag's x position
            }
        }
        prevX = tagRect.left - firstTagX; // remember the x-position of this tag 
    }
}


//------------------------------------------------------------------------ get x-position of the selected tag
function selectedTagX() {
    if (!tagBarWrapper) {
        return 0; // Or handle the error as needed
    }
    const allTags = tagBarWrapper.querySelectorAll('.tagButton');
    let firstTagX = 0;
    let selectedTagPosition = 0;

    for (let i = 0; i < allTags.length; i++) {              // iterate over them from left to right
        const tagRect = allTags[i].getBoundingClientRect();
        if (i === 0) { firstTagX = tagRect.left; }              // remember position of first tag for reference

        const buttonText = allTags[i].textContent;
        // Extract tag name from button text (remove count in parentheses)
        const tagName = buttonText.replace(/\s*\(\d+\)$/, '');

        if (selectedTag === tagName || (selectedTag === null && buttonText.startsWith('Show All'))) {
            selectedTagPosition = tagRect.left - firstTagX;
            break;
        }
    }



    return selectedTagPosition;
}

//------------------------------------------------------------------------   handle horizontal scroll button activity and visibility (FILTER BAR)
function updateScrollButtonsVisibility() {

    if (!tagBarWrapper || !scrollLeftButton || !scrollRightButton) return;

    // Check if total width is less than or equal to visible width
    const isScrollable = tagBarWrapper.scrollWidth > tagBarWrapper.clientWidth;

    // Show/hide buttons based on scrollability
    if (!isScrollable) {
        scrollLeftButton.style.display = 'none';
        scrollRightButton.style.display = 'none';
        return;
    } else {
        scrollLeftButton.style.display = 'block';
        scrollRightButton.style.display = 'block';
    }
}


function initTagBar() {

    // Count how many projects each tag appears in
    contentObject.forEach(project => {
        project.tags.forEach(tag => {
            tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        });
    });

    // Keep original tag names in allTags for comparisons
    allTags.clear();
    tagCounts.forEach((count, tag) => {
        allTags.add(tag);
    });

    renderTagBar();
    layoutTagScrollButtons();
    enableDesktopSwipe();
}


//------------------------------------------------------------------------  make tag menu swipeable on desktop
function enableDesktopSwipe() {
    if (!tagBarWrapper) return;

    let isPointerDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    let dragging = false;
    const DRAG_THRESHOLD = 8; // pixels to move before we treat it as a drag

    // cosmetic: show a grab cursor
    tagBarWrapper.style.cursor = 'grab';
    tagBarWrapper.style.userSelect = 'none';

    tagBarWrapper.addEventListener('pointerdown', (e) => {
        // Only left button
        if (e.button && e.button !== 0) return;

        // IMPORTANT: don't start a drag when pressing the scroll arrow buttons
        if (e.target.closest('.scrollButton')) return;

        // Start tracking pointer; but do NOT capture immediately
        isPointerDown = true;
        dragging = false;
        moved = false;
        startX = e.clientX;
        startScroll = tagBarWrapper.scrollLeft;

        // make the scrolling immediate while dragging
        tagBarWrapper.style.scrollBehavior = 'auto';
        tagBarWrapper.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
        if (!isPointerDown) return;
        const dx = e.clientX - startX;

        // Start the drag only after threshold to avoid breaking clicks
        if (!dragging && Math.abs(dx) > DRAG_THRESHOLD) {
            dragging = true;
            moved = true;
        }

        if (dragging) {
            tagBarWrapper.scrollLeft = startScroll - dx;
        }
    });

    function endPointer(e) {
        if (!isPointerDown) return;
        isPointerDown = false;
        tagBarWrapper.style.scrollBehavior = 'smooth';
        tagBarWrapper.style.cursor = 'grab';

        // If we actually dragged, block the immediate click that would follow pointerup
        if (moved) {
            const blockClick = function (ev) {
                ev.stopImmediatePropagation();
                ev.preventDefault();
                document.removeEventListener('click', blockClick, true);
            };
            // capture-phase click blocker — only runs once
            document.addEventListener('click', blockClick, true);

            // safety: reset moved after a short delay if no click happens
            setTimeout(() => { moved = false; }, 50);
        }
    }

    window.addEventListener('pointerup', endPointer);
    window.addEventListener('pointercancel', endPointer);
    window.addEventListener('pointerleave', endPointer);
}


//------------------------------------------------------------------------  render horizontal tag menu / tag buttons
function renderTagBar() {
    if (!tagBar) return;
    tagBar.innerHTML = ''; // Clear existing buttons

    function createTagButton(label, tagValue) {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.classList.add("tagButton");

        // Base styles
        btn.style.cssText = `
        background: #0af;
        color: white;
        font-family: futuraMR;
        font-size: ${tagFontSize}rem;
        letter-spacing: ${tagFontSize * 0.1}rem;
        text-transform: uppercase;
        border: none;
        padding: ${borderWidth}px ${borderWidth * 2}px;
        cursor: pointer;
        box-shadow: 4px 4px 8px rgba(0,0,0,.2);
        transition: all 0.3s ease;
    `;

        const updateStyles = () => {
            const isSelectedNow = selectedTag === tagValue;
            if (isSelectedNow) {
                btn.style.background = '#fff';
                btn.style.color = '#0af';
            } else {
                btn.style.background = '#0af';
                btn.style.color = '#fff';
            }
        };

        updateStyles();

        const handleTagClick = () => {
            selectedTag = (tagValue === null) ? null : tagValue;

            visibleContent = (selectedTag)
                ? contentObject.filter(p => p.tags.includes(selectedTag))
                : [...contentObject];

            // Reset arrays  
            xPosition = new Array(visibleContent.length + 1).fill(0);
            yPosition = new Array(visibleContent.length + 1).fill(0);
            cellFormat = new Array(visibleContent.length + 1).fill('');
            imgIsLoaded = new Array(visibleContent.length + 1).fill(0);

            layoutGrid();
            renderTagBar();

            tagBarWrapper.scrollTo({
                left: selectedTagX(),
                behavior: 'smooth'
            });

            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });

            scroll();
            console.log(`Selected tag: ${selectedTag}`);
        };

        // Only trigger tap/click if the user did NOT drag
        let tapStart = 0;
        let tapMoved = false;

        btn.addEventListener('pointerdown', (e) => {
            tapStart = e.clientX;
            tapMoved = false;
        });

        btn.addEventListener('pointermove', (e) => {
            if (Math.abs(e.clientX - tapStart) > 8) { // same threshold as swipe
                tapMoved = true;
            }
        });

        btn.addEventListener('pointerup', (e) => {
            if (!tapMoved) {
                handleTagClick();
            }
        });

        // Optional: fallback for older touch browsers
        btn.addEventListener('click', (e) => {
            if (!tapMoved) handleTagClick();
        });

        return btn;
    }



    // Show All button
    tagBar.appendChild(createTagButton(`Show All (${contentObject.length})`, null));

    // Add all tags sorted by count then alphabetically


    console.log(); console.log("------------");
    console.log("Filter Tags:"); console.log();
    [...allTags]
        .sort((a, b) => {
            const countDiff = (tagCounts.get(b) || 0) - (tagCounts.get(a) || 0);
            return countDiff !== 0 ? countDiff : a.localeCompare(b);
        })
        .forEach(tag => {
            const count = tagCounts.get(tag) || 0;
            tagBar.appendChild(createTagButton(`${tag} (${count})`, tag));
            console.log(`${tag} (${count})`);
        });

    console.log("------------");
}




///////////////////////////////////////////////////////////////////--------------------------DRAW A CONTENT RECTANGLE AND ADD IT TO 'MENU' DIV

function drawRect(format, index) { //draws a single menu item and appends it to the menu div
    if (verbose === 1) { console.log('drawRect ' + format + ' ' + index); } //log function call if verbose mode is on

    //declare variables for item dimensions
    let xSize, ySize;

    //calculate dimensions based on format
    if (format === 'landscape') {
        xSize = cellSize * 2 - borderWidth;
        ySize = cellSize - borderWidth;
    } else if (format === 'portrait') {
        xSize = cellSize - borderWidth;
        ySize = cellSize * 2 - borderWidth;
    } else { //square format
        xSize = cellSize - borderWidth;
        ySize = cellSize - borderWidth;
    }

    //create the main anchor element
    let anchor = document.createElement('a');
    anchor.href = visibleContent[index].url; //set link from content array
    anchor.id = 'item' + index; //assign a unique id
    anchor.style.cssText = ` /*apply styles using a template literal*/ 
    width: ${xSize}px;
    height: ${ySize}px;
    display: inline-block;
    position: absolute;
    left: ${xPosition[index]}px;
    top: ${yPosition[index]}px;
    box-shadow: 4px 4px 8px rgba(0,0,0,.1);
    background:#fff;
    transition: top 0.5s, background-color 0.5s;
  `;

    //set event handlers for mouse interactions
    anchor.onmouseover = function () { mouseOverBox(this, index); }; //change style on mouse over
    anchor.onmouseout = function () { mouseOutBox(this, index); }; //restore style on mouse out

    //build the inner HTML content as a single string
    let content = `
    <div style="  width: ${xSize - borderWidth * 2}px; height: ${ySize - borderWidth * 2}px; display: inline-block; position: absolute; 
    left: ${borderWidth}px; top: ${borderWidth}px; overflow:hidden; background:${colors[(index + 7 + hash(selectedTag)) % colors.length]};">
      <img id="img${index}" src="random/images/1x1.png" style="${format === 'landscape' ? `width:${cellSize * 2 + borderWidth * 4}px;` : `height:${ySize + borderWidth * 4}px;`
        } position:absolute; left:0px; top:0px;">
    </div>

    <div style=" max-width: ${xSize - borderWidth * 3}px; max-height: ${ySize - borderWidth * 2}px; color:#fff; display: inline-block; position: absolute; 
    left: ${borderWidth * 2}px; top: ${borderWidth * 2}px; overflow:hidden; text-align: left;">
      
    <span style="white-space: pre-wrap; hyphens:auto; word-break: break-word; overflow-wrap: break-word; background:${colors[(index + hash(selectedTag)) % colors.length]}; 
      padding:${borderWidth}px; -webkit-box-decoration-break: clone;box-decoration-break: clone;font-family: Georgia, Times, serif;font-size: ${itemFontSize}rem; 
      line-height:  ${itemFontSize * 1.5}rem; font-style: italic; text-align: left; text-shadow: 2px 2px 8px rgba(0,0,0,.2);
      box-shadow: 4px 4px 8px rgba(0,0,0,.2);">${visibleContent[index].title}</span>

      <br/>

      <div style="height:6px;display:block;"></div>
      <span style="white-space: pre-wrap; hyphens:auto; word-break: break-word; overflow-wrap: 
      break-word;background:${colors[(index + hash(selectedTag)) % colors.length]}; color:#fff; padding:${borderWidth}px; -webkit-box-decoration-break: clone;
      box-decoration-break: clone; font-family: Georgia, Times, serif;font-size: ${itemFontSizeUnderline}rem; line-height:  ${itemFontSizeUnderline * 1.5}rem;
      text-shadow: 2px 2px 6px rgba(0,0,0,.2);box-shadow: 4px 4px 8px rgba(0,0,0,.2);text-align: left;">${visibleContent[index].type}, ${visibleContent[index].year}</span>
      
      <br/>

      <div style="height:16px;display:block;" id="year${index}"></div>
    </div>`;

    anchor.innerHTML = content;                              // append the content string
    menuDiv.appendChild(anchor);     // append the newly created element to the menu
    imgIsLoaded[index] = 0;                                  // reset image loaded status, as the new box contains a placeholder
}


///////////////////////////////////////////////////////////////////--------------------------CHANGE STYLE WHEN MOUSE OVER MENU BOX
function mouseOverBox(element, index) {
    //change color of frame
    element.style.backgroundColor = colors[(index + 3 + hash(selectedTag)) % colors.length];

}

///////////////////////////////////////////////////////////////////--------------------------CHANGE STYLE WHEN MOUSE OUTSIDE MENU BOX
function mouseOutBox(element, index) {
    //change color of frame
    element.style.backgroundColor = '#fff';
}
///////////////////////////////////////////////////////////////////--------------------------HAPPENS WHEN SCROLLED - CARES ABOUT LOADING MENU IMAGES
let pTempScrollPos = 0;
function scroll() {
    //calculate scrollposition from top
    let tempScrollPos = w100p.getBoundingClientRect();
    if (pTempScrollPos !== tempScrollPos) {
        pTempScrollPos = tempScrollPos;
        pScrollPos = scrollPos; //remember old scroll position
        scrollPos = -tempScrollPos.top;

        checkMenuImages(scrollPos);
        scrollFade(scrollPos, pScrollPos);
        debug();
    }
}
///////////////////////////////////////////////////////////////////--------------------------PERIODIC SAFETY CHECK - makes sure all is faded well / fallback if scroll listener does not work
let pSafetyScrollPos = 0;

function safetyCheck() {
    let scrollPosition = window.scrollY; // y-scroll pos
    if (pSafetyScrollPos !== scrollPosition) {
        pSafetyScrollPos = scrollPosition;
        scroll();
    }
}



///////////////////////////////////////////////////////////////////--------------------------CHECK IF ITEMS ARE WITHIN IN VIEWPORT & LOAD IMAGES WHEN NEEDED
function checkMenuImages(scrollPos) {
    for (let i = 0; i < numberOfElements; i++) {
        //calculate height of menu element
        let ySize = 0;
        if (cellFormat[i] === 'landscape') { ySize = cellSize; } else { ySize = cellSize * 2; }

        //are blocks above, inside or below viewport?
        //remember where menu item was 
        itemVisible[i] = 1;
        if (yPosition[i] + h > scrollPos + h) {   //below:
            itemVisible[i] = 0;
        }
        if (yPosition[i] + h + ySize < scrollPos) { //above:
            itemVisible[i] = 2;
        }
        if (itemVisible[i] === 1 && imgIsLoaded[i] === 0) {
            //item entered viewport: load image and fade it in, once loaded
            loadImg(i);
        }
    }
}


///////////////////////////////////////////////////////////////////--------------------------FADE VIDEO AND RANDOM MESSAGE BASED ON SCROLL
function scrollFade(scrollPos, pScrollPos) {
    //fade background video based on scroll position
    let videoFadeValue = (h - scrollPos) / h;
    if (videoFadeValue < 0) { videoFadeValue = 0; }

    if (videoFadeValue > 0) {
        if (verbose === 1) { console.log('fade splash:' + videoFadeValue); }
        fadeScrollContainer.style.opacity = videoFadeValue;
    }

    if (scrollPos > h * 2 && pScrollPos <= h * 2) {
        if (verbose === 1) { console.log('hide splash!'); }
        fadeScrollContainer.style.display = 'none';
    }

    if (scrollPos < h * 2 && pScrollPos >= h * 2) {
        if (verbose === 1) { console.log('show splash!'); }
        fadeScrollContainer.style.display = 'block';
    }

    // fade random message based on scroll position
    let randomFadeValue = Math.min(Math.max(scrollPos - h, 0) / h, 1);
    randomMessage.style.opacity = randomFadeValue * 2 - .25;

    if (randomFadeValue > 0) {
        randomMessage.style.display = "block";
    } else {
        randomMessage.style.display = "none";
    }

}

///////////////////////////////////////////////////////////////////--------------------------POSITION IMAGE INSIDE CONTAINER DIV - ROBUST VERSION
function positionImg(index, zoom) {
    let imgID = 'img' + index;
    let imgElement = document.getElementById(imgID);

    // Validate image element exists
    if (!imgElement) {
        console.warn(`Image element ${imgID} not found`);
        return;
    }

    // Find original image dimensions 
    imgW[index] = imgElement.naturalWidth || imgElement.width;
    imgH[index] = imgElement.naturalHeight || imgElement.height;


    // Validate image dimensions
    if (imgW[index] <= 0 || imgH[index] <= 0) {
        console.warn(`Invalid image dimensions for index ${index}: ${imgW[index]}x${imgH[index]}`);
        return;
    }

    // Store original dimensions in temporary variables
    let tempW = imgW[index];
    let tempH = imgH[index];

    // Validate and clamp positioning values (0-1 range)
    let xPos = parseFloat(visibleContent[index].xPos) || 0.5; // Default to center if invalid
    let yPos = parseFloat(visibleContent[index].yPos) || 0.5; // Default to center if invalid

    xPos = Math.max(0, Math.min(1, xPos)); // Clamp between 0 and 1
    yPos = Math.max(0, Math.min(1, yPos)); // Clamp between 0 and 1

    // Set base styles common to all images
    imgElement.style.position = 'absolute';
    imgElement.style.opacity = 1;

    // Calculate container dimensions based on cell format
    let containerW, containerH;

    if (cellFormat[index] === 'landscape') {
        containerW = cellSize * 2 - borderWidth;
        containerH = cellSize - borderWidth;
    } else if (cellFormat[index] === 'portrait') {
        containerW = cellSize - borderWidth;
        containerH = cellSize * 2 - borderWidth;
    } else { // square format
        containerW = cellSize - borderWidth;
        containerH = cellSize - borderWidth;
    }

    // Validate container dimensions
    if (containerW <= 0 || containerH <= 0) {
        console.warn(`Invalid container dimensions: ${containerW}x${containerH}`);
        return;
    }

    // Calculate image aspect ratio and container aspect ratio
    let imgAspectRatio = tempW / tempH;
    let containerAspectRatio = containerW / containerH;

    let imageW, imageH, offsetX, offsetY;

    if (imgAspectRatio > containerAspectRatio) {
        // Image is wider relative to container - scale to fill height, crop width
        imageH = containerH;
        imageW = imageH * imgAspectRatio;

        // Calculate maximum possible offset (how much we can shift)
        let maxOffsetX = imageW - containerW;
        offsetX = -(maxOffsetX * xPos); // Apply positioning (negative because we're shifting left)
        offsetY = 0; // No vertical offset needed

    } else {
        // Image is taller relative to container - scale to fill width, crop height
        imageW = containerW;
        imageH = imageW / imgAspectRatio;

        // Calculate maximum possible offset (how much we can shift)
        let maxOffsetY = imageH - containerH;
        offsetX = 0; // No horizontal offset needed
        offsetY = -(maxOffsetY * yPos); // Apply positioning (negative because we're shifting up)
    }

    // Apply calculated styles
    imgElement.style.width = Math.round(imageW) + 'px';
    imgElement.style.height = Math.round(imageH) + 'px';
    imgElement.style.left = Math.round(offsetX) + 'px';
    imgElement.style.top = Math.round(offsetY) + 'px';

    // Debug output if verbose mode is on
    if (verbose === 1) {
        let debugInfo = `
      <div style="background:#333;">
        index: ${index} | 
        pos: ${xPos.toFixed(2)},${yPos.toFixed(2)} | 
        ${cellFormat[index]} | 
        ${Math.round(imageW)}x${Math.round(imageH)} → ${containerW}x${containerH}
      </div>
    `;
        let yearElement = document.getElementById("year" + index);
        if (yearElement) {
            yearElement.innerHTML = debugInfo;
        }
    }
}



///////////////////////////////////////////////////////////////////--------------------------ENHANCED LOAD IMAGE FUNCTION
function loadImg(index) {
    // Validate index
    if (index < 0 || index >= numberOfElements) {
        console.warn(`Invalid image index: ${index}`);
        return;
    }

    // Generate URL with fallback
    let imgFileName = visibleContent[index].image;
    if (imgFileName === null) { imgFileName = 'placeholder.jpg' };

    let imgURL = 'random/images/' + imgFileName;
    let imgID = 'img' + index;

    let imgElement = document.getElementById(imgID);
    if (!imgElement) {
        console.warn(`Image element ${imgID} not found`);
        return;
    }

    if (verbose === 1) {
        console.log('loadImage ' + index + ' - ' + imgURL);
    }

    // Add error handling for failed image loads
    imgElement.onerror = function () {
        console.warn(`Failed to load image: ${imgURL}`);
        // Set a placeholder or default image
        this.src = 'random/images/placeholder.jpg';
        // Still try to position it
        setTimeout(() => positionImg(index, 0), 100);
    };

    // Load the image
    imgElement.src = imgURL;

    // When new image is loaded: position image inside div
    imgElement.onload = function () {
        // Ensure image has loaded with valid dimensions
        if (this.naturalWidth > 0 && this.naturalHeight > 0) {
            positionImg(index, 0);
            imgIsLoaded[index] = 1;
        } else {
            console.warn(`Image loaded but has invalid dimensions: ${imgURL}`);
        }
    };
}



///////////////////////////////////////////////////////////////////--------------------------SPLASH VIDEO LOADING 
function loadBackgroundVideo() {
    const videoContainer = document.getElementById('videoContainer');
    if (!videoContainer) {
        console.warn('Video container not found');
        return;
    }


    // Decide format
    const isLandscape = w > h;
    videoFormat = isLandscape ? 'landscape' : 'portrait';

    const videoSources = isLandscape
        ? [
            { src: 'video/2025_landscape_coded.webm', type: 'video/webm' },
            { src: 'video/2025_landscape_coded.mp4', type: 'video/mp4' }
        ]
        : [
            { src: 'video/2025_square_coded.webm', type: 'video/webm' },
            { src: 'video/2025_square_coded.mp4', type: 'video/mp4' }
        ];


    // Try to reuse video element 
    if (!videoElement) {
        videoElement = document.createElement('video');
        videoElement.id = 'bgndVideo';
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;
        videoElement.preload = 'auto';
        videoElement.style.cssText = 'position: absolute; margin: 0; padding: 0;';
        videoContainer.innerHTML = '';
        videoContainer.appendChild(videoElement);
    } else {
        // Cleanup old sources + decoder
        videoElement.pause();
        videoElement.removeAttribute('src');
        while (videoElement.firstChild) {
            videoElement.removeChild(videoElement.firstChild);
        }
        videoElement.load(); // releases decoder in Firefox
    }

    // Add new sources
    videoSources.forEach(srcObj => {
        const s = document.createElement('source');
        s.src = srcObj.src;
        s.type = srcObj.type;
        videoElement.appendChild(s);
    });

    // Track load state
    let videoLoaded = false;
    let loadTimeout;

    function onVideoReady() {
        if (videoLoaded) return;
        videoLoaded = true;
        if (loadTimeout) clearTimeout(loadTimeout);
        if (verbose === 1) console.log("Video loaded successfully:", videoFormat);
        positionAndShowVideo(videoElement);

        // fade in new video
        requestAnimationFrame(() => {
            videoContainer.style.opacity = '1';
        });
    }

    function onVideoError(error) {
        if (videoLoaded) return;
        videoLoaded = true;
        if (loadTimeout) clearTimeout(loadTimeout);
        console.warn("Video failed to load:", error);
        handleVideoFallback();
    }

    // Event listeners
    videoElement.addEventListener("canplaythrough", onVideoReady, { once: true });
    videoElement.addEventListener("loadeddata", onVideoReady, { once: true });
    videoElement.addEventListener("error", onVideoError, { once: true });

    // Timeout fallback
    loadTimeout = setTimeout(() => {
        if (!videoLoaded) {
            console.warn("Video load timeout");
            onVideoError("timeout");
        }
    }, 10000);

    // Per-source error handling
    videoSources.forEach((src, i) => {
        const sourceElement = videoElement.children[i];
        sourceElement.addEventListener("error", () => {
            console.warn(`Source ${src.src} failed to load`);
        });
    });

    // Start loading
    videoElement.load();
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => console.warn("Autoplay blocked:", err));
    }
}


// Position and display video with proper scaling
function positionAndShowVideo(videoElement) {
    if (!videoElement) return;
    if (!videoContainer) return;

    // Reset positioning
    videoContainer.style.top = '';
    videoContainer.style.left = '';
    videoElement.style.width = '';
    videoElement.style.height = '';

    if (videoFormat === 'landscape') {
        const videoAspectRatio = 16 / 9;
        const viewportAspectRatio = w / h;

        if (viewportAspectRatio > videoAspectRatio) {
            // Viewport wider than video - scale to width
            const videoHeight = w / videoAspectRatio;
            videoElement.style.width = (w + 20) + 'px';
            videoContainer.style.top = -((videoHeight - h) / 2) + 'px';
            videoContainer.style.left = '-10px';

            if (verbose === 1) {
                console.log('Landscape video: scaling to width');
            }
        } else {
            // Viewport taller than video - scale to height
            const videoWidth = h * videoAspectRatio;
            videoElement.style.height = (h + 10) + 'px';
            videoContainer.style.top = '-5px';
            videoContainer.style.left = -((videoWidth - w) / 2) + 'px';

            if (verbose === 1) {
                console.log('Landscape video: scaling to height');
            }
        }
    } else {
        // Portrait/square video
        videoContainer.style.top = '-5px';
        videoContainer.style.left = -((h - w) / 2) + 'px';
        videoElement.style.width = (h + 10) + 'px';
        videoElement.style.height = (h + 10) + 'px';

        if (verbose === 1) {
            console.log('Portrait video: square scaling');
        }
    }

    // Fade in video
    videoContainer.style.opacity = '1';

    // Ensure video plays (some browsers require user interaction)
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.warn('Video autoplay failed:', error);
            // Could implement click-to-play fallback here
        });
    }
}


// Fallback for when video fails to load
function handleVideoFallback() {
    if (!videoContainer) return;

    // Clear any failed video content
    videoContainer.innerHTML = '';

    // Let CSS background (#ccc) show through by making container visible
    videoContainer.style.opacity = '1';

    if (verbose === 1) {
        console.log('Video fallback: using default grey background');
    }
}
///////////////////////////////////////////////////////////////////-------------------------- DEBUG --------------------------///////////////////////////////////////////////////////////////////
function debug() {
    if (verbose === 1) {

        //draw measuring rectangles
        let x = w;
        measureR.style.left = x - 48.3 + 'px';
        measureB.style.left = x + 8.3 + 'px';
        measureR.style.opacity = .5;
        measureB.style.opacity = .5;
        menuTop.style.opacity = .5;

        //debug

        debugDiv.innerHTML = 'width: ' + w + ' &nbsp; height: ' + h + ' scroll: ' + parseInt(scrollPos);
        debugDiv.innerHTML += '<br/>  100 % width: ' + w100p.getBoundingClientRect().width;

        for (let i = 0; i < numberOfElements; i++) {
            let xs = 0;
            debugDiv.innerHTML += '<span style="position:absolute; left:0px;">' + i + ': </span>';
            if (itemVisible[i] === 0) {
                debugDiv.innerHTML += '<span style="position:absolute; left:20px; width:100px; height: 13px; display:block; overflow:hidden; background:rgba(255,0,0,.5);">' + visibleContent[i].title + '</span>';
            }
            if (itemVisible[i] === 1) {
                debugDiv.innerHTML += '<span style="position:absolute; left:20px; width:100px; height: 13px; display:block; overflow:hidden; background:rgba(0,255,0,.5);">' + visibleContent[i].title + '</span>';
            }
            if (itemVisible[i] === 2) {
                debugDiv.innerHTML += '<span style="position:absolute; left:20px; width:100px; height: 13px; display:block; overflow:hidden; background:rgba(0,0,255,.5);">' + visibleContent[i].title + '</span>';
            }
            debugDiv.innerHTML += '<span style="position:absolute; left:130px; width:30px;"></span>';
            debugDiv.innerHTML += '<span style="position:absolute; left:150px; width:30px;">' + itemVisible[i] + '</span><br/>';
        }
    }
}
