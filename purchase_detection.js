
let button = ""

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("grabbed button")
    sendResponse({gotButton: "gotButton"})
    if (request.changedURL === "changed") {
        console.log("1")
        button = document.getElementsByClassName("Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 dpXlkZ fzwDgL")[0]
        console.log(button)
    }   
})

button.addEventListener("click", () => {
    console.log("hello")
    chrome.runtime.sendMessage({notif: "showNotification"}, (response) => {
        console.log(response)
    })
    })