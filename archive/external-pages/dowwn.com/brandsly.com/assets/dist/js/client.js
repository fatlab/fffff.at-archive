document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("nav-search");
    const searchInput = document.getElementById("top-search");
    const searchButton = document.getElementById("top-search-button");
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
