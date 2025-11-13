
document.addEventListener("DOMContentLoaded", function () {
	  const isTouchDevice = matchMedia("(hover: none)").matches;

  document.querySelectorAll(".logo-canvas").forEach(canvas => {
    const textEl = canvas.querySelector(".h5");
    const svgEl  = canvas.querySelector("svg");

    /* cache originals */
    const computed = getComputedStyle(canvas);
    const original = {
      bg  : computed.backgroundColor,
      txt : textEl ? getComputedStyle(textEl).color : null,
      svg : svgEl ? getComputedStyle(svgEl).fill   : null,
    };

    /* helpers */
    const rgb = c => {
      const p = document.createElement("div");
      p.style.color = c; document.body.appendChild(p);
      const r = getComputedStyle(p).color;
      document.body.removeChild(p); return r;
    };
    const white   = c => rgb(c) === "rgb(255, 255, 255)";
    const sameCol = (a,b) => rgb(a) === rgb(b);

    /* hover logic */
    const apply = () => {
      if (!original.svg || sameCol(original.bg, original.svg)) return;

      const toWhite = !white(original.bg);
      const newBG   = toWhite ? "#ffffff"   : original.svg;
      const newTxt  = toWhite ? "#000000"   : "#ffffff";
      const newSvg  = toWhite ? original.bg : "#ffffff";

      /* overwrite full background, force priority */
      canvas.style.setProperty("background", newBG, "important");
      if (svgEl)  svgEl.style.fill   = newSvg;
      if (textEl) textEl.style.color = newTxt;
    };

    const reset = () => {
      canvas.style.setProperty("background", original.bg, "important");
      if (svgEl)  svgEl.style.fill   = original.svg;
      if (textEl) textEl.style.color = original.txt;
    };

    /* event wiring */
    let timer;
    const enter = () => {
      if (isTouchDevice) {              // no delay on touch
        apply();
      } else {
        timer = setTimeout(apply, 150); // keep desktop delay
      }
    };
    const leave = () => {
      clearTimeout(timer);
      reset();
    };

    canvas.addEventListener("mouseenter", enter, { passive:true });
    canvas.addEventListener("mouseleave", leave, { passive:true });
    canvas.addEventListener("touchstart",  enter, { passive:true });
    canvas.addEventListener("touchend",    leave, { passive:true });
    canvas.addEventListener("touchcancel", leave, { passive:true });
  });
 
    const searchForm = document.getElementById("main-search");
    const searchInput = document.getElementById("main-search-input");
    const searchButton = document.getElementById("main-search-button");
    if (!searchForm || !searchInput || !searchButton) return;

    function sanitizeInput(input) {
        return input.replace(/[^a-zA-Z0-9\s.-]/g, '').trim(); // Remove special characters, keep spaces & hyphens
    }

	function slugify(input) {
		return input
			.toLowerCase()
			.trim()
			.replace(/\./g, '-')       // Replace dots explicitly with hyphens
			.replace(/\s+/g, '-')      // Replace spaces with hyphens
			.replace(/[^a-z0-9-]/g, ''); // Remove other non-alphanumeric & non-hyphen characters
	  }

    function handleSearch(event) {

        event.preventDefault(); // Prevent default form submission

        let rawKeywords = searchInput.value; // Get input value
        rawKeywords =  rawKeywords.replace(/\.com/gi, '');
        let sanitizedKeywords = sanitizeInput(rawKeywords);
        let slugifiedKeywords = slugify(sanitizedKeywords);
        if (!sanitizedKeywords) {
            return;
        }

        // Redirect user to search results page
        window.location.href = `/search/${slugifiedKeywords}`;
    }


    // Trigger search when the button is clicked
    searchButton.addEventListener("click", handleSearch);

    // Trigger search when "Enter" is pressed in the input field
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleSearch(event);
        }
    });
    
});