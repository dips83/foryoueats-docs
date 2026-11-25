// Mintlify opens the navbar's "Go Back To Foryoueats" button (docs.json navbar.primary) in a new
// tab, and docs.json has no setting for it. Leaving the help center for the site should stay in
// the same tab, so drop target="_blank" from links to the site's home page, including ones
// Mintlify renders after the page loads or on client-side navigation.
(function () {
  function sameTab() {
    document.querySelectorAll('a[target="_blank"][href^="https://foryoueats.com"]').forEach(function (link) {
      var url = new URL(link.href);
      if (url.hostname === 'foryoueats.com' && (url.pathname === '/' || url.pathname === '')) {
        link.removeAttribute('target');
      }
    });
  }

  sameTab();
  new MutationObserver(sameTab).observe(document.documentElement, { childList: true, subtree: true });
})();
