chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.notif === "showNotification") {
        // show notification
        console.log("4")

    }
})

let currentURL = ""

chrome.tabs.onActivated.addListener(activeInfo => {
    let tabId = activeInfo.tabId
    chrome.tabs.get(tabId, (tab) => {
    currentURL = tab.url
    console.log("3: " + currentURL)
    })
    })

chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
    console.log("1")
    if (currentURL !== changeInfo.url) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            console.log(tabs)
            chrome.tabs.sendMessage(tabs[0].id, {changedURL: "changed"}, async (response) => {
                console.log("5")
                console.log(response)
            })
        })
        currentURL = changeInfo.url
        console.log("2: " + currentURL)
    }
})
