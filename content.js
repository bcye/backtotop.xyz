chrome.runtime.onMessage.addListener(function(message) {
  if (message === "pageActionClicked") {
    window.scrollTo(0, 0);
  }
});
