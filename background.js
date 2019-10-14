/* chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
  // TODO: Open Hello Page
    }
}); */

// TODO: chrome.runtime.setUninstallURL("typeform link");

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("test");
  chrome.tabs.executeScript(tab.id, {
    code: "window.scrollTo(0, 0);"
  });
  //   chrome.runtime.sendMessage("pageActionClicked");
});
