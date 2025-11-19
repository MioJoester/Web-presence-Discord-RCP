async function sendActivity(url, title) {
  try {
    await fetch("http://localhost:3001/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, title })
    });
  } catch (err) {
    console.error("Failed to send activity:", err);
  }
}

browser.tabs.onActivated.addListener(async (info) => {
  const tab = await browser.tabs.get(info.tabId);
  sendActivity(tab.url, tab.title);
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    sendActivity(tab.url, tab.title);
  }
});
