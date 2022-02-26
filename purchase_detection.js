
let button = document.getElementsByClassName("Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 dpXlkZ fzwDgL")[0]

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("grabbed button")
    if (request.changeURL === "changed") {
        button = document.getElementsByClassName("Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 dpXlkZ fzwDgL")[0]
    }   
    sendResponse({gotButton: button})
})

button.addEventListener("click", () => {
    console.log("hello")
    // chrome.runtime.sendMessage({notif: "showNotification"}, (response) => {
    //     console.log(response)
    // })
    })