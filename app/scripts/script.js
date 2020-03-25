
function handleCapture(tabTtile){

    chrome.tabs.captureVisibleTab(null, {format:"jpeg"}, function(result){
        localStorage.setItem("__item",JSON.stringify({
            item:result,
            name:tabTtile
        }))
        chrome.tabs.create({url:"../pages/capture.html"},function(e){
 
        })
    
        })
}
window.handleCapture=handleCapture