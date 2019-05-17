console.log("here i'm");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab)
{
    let m ={
    txt:"hello"

    }
    chrome.tabs.sendMessage(tab.id,m)    
}