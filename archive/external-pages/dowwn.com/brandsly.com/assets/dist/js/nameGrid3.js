function setupNameGrid() {
  // Check localStorage support
  function supportsLocalStorage() {
    try {
      const testKey = '__testLocalStorage__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

	 if (!supportsLocalStorage()) {
	  document.querySelectorAll('.bookmark-heart').forEach(h => h.style.display = 'none');
	  const mainHeart = document.getElementById('shortlist');
	  if (mainHeart) mainHeart.style.display = 'none';
	  return;
	}

  // Retrieve shortlist
  let shortlist = JSON.parse(localStorage.getItem('shortlist')) || [];

  // Adjusted selector to match new markup:
  document.querySelectorAll('#domain-grid .card, #shortlist').forEach(card => {
    
    const isMain = card.id === 'shortlist';             // landing–page heart?

    // heart <i> element
    const heart = isMain
      ? card.querySelector('i')                         // #shortlist i
      : card.querySelector('.bookmark-heart i');        // grid heart

    // element that holds the domain name text
    const domainNameEl = isMain
      ? document.getElementById('domainName')           // landing banner
      : card.querySelector('.domain-name a');           // grid card

    if (!heart || !domainNameEl) return;                // safety bail-out

    const domainName = domainNameEl.textContent.trim(); 

    if (shortlist.includes(domainName)) {
      heart.classList.add('liked', 'bi-heart-fill');
      heart.classList.remove('bi-heart');
    } else {
      heart.classList.remove('liked', 'bi-heart-fill');
      heart.classList.add('bi-heart');
    }

    heart.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('liked')) {
        this.classList.remove('liked', 'bi-heart-fill');
        this.classList.add('bi-heart');
        shortlist = shortlist.filter(d => d !== domainName);
        localStorage.setItem('shortlist', JSON.stringify(shortlist));
        fetch('/shortlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: domainName, action: 'remove' })
        });
      } else {
        if (shortlist.length > 80) {
          alert(`You've reached the limit of name bookmarks.\nPlease remove some from your "favorites" to add more.`);
          return;
        }
        this.classList.add('liked', 'bi-heart-fill');
        this.classList.remove('bi-heart');
        if (!shortlist.includes(domainName)) {
          shortlist.push(domainName);
          localStorage.setItem('shortlist', JSON.stringify(shortlist));
        }
        fetch('/shortlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: domainName, action: 'add' })
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupNameGrid);
window.setupNameGrid = setupNameGrid;
