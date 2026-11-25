// Mintlify opens the navbar's "Go Back To Foryoueats" button (docs.json navbar.primary) in a new
// tab, and docs.json has no setting for it. Leaving the help center for the site should stay in
// the same tab, so links to the site's home page lose target="_blank" when clicked (Mintlify's
// React puts the attribute back after it's removed, so it's dropped at the click, just before
// the browser follows the link; Ctrl/Cmd-click still opens a new tab).
(function () {
  function isHomeLink(link) {
    if (!link || !link.href) return false;
    var url = new URL(link.href, location.href);
    return url.hostname === 'foryoueats.com' && (url.pathname === '/' || url.pathname === '');
  }

  function sameTab(event) {
    var link = event.target.closest && event.target.closest('a[target="_blank"]');
    if (isHomeLink(link)) link.removeAttribute('target');
  }

  document.addEventListener('click', sameTab, true);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') sameTab(event);
  }, true);
})();
