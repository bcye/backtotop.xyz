chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    chrome.tabs.create({
      url:
        "https://www.notion.so/Thank-you-for-installing-backtotop-xyz-3bc2d450aa80486589779f09a9c14d53"
    });
  }
});

TODO: chrome.runtime.setUninstallURL("https://bruce160.typeform.com/to/Tf3uCq");

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("test");
  chrome.tabs.executeScript(tab.id, {
    code: "window.scrollTo(0, 0);"
  });
});
