// Archive-only: Update days counter
(function() {
  var launchDate = new Date('2011-10-09T16:04:43-04:00');
  var now = new Date();
  var daysDiff = Math.floor((now - launchDate) / (1000 * 60 * 60 * 24));
  var counterEl = document.getElementById('occupy-length-days');
  if (counterEl) {
    counterEl.textContent = daysDiff + ' days';
  }
})();
