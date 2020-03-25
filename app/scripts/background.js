

chrome.browserAction.onClicked.addListener(function(tab) {
console.log("clicked");

})
chrome.commands.onCommand.addListener(function(command) {

   closeAll()
  
  });

 
 
  function closeAll(){

    var allTabsID=[]
    var currentTabId
    chrome.tabs.getSelected(null, function(tab) {
        currentTabId=tab.id;
        chrome.tabs.query({}, function(tabs){
            tabs.forEach(tb => {
                allTabsID.push(tb.id);
            });
            allTabsID=allTabsID.filter(function(t){
                return t!==currentTabId
            })
            chrome.tabs.remove(allTabsID,function(){
 
            })
        });
     

    })
 
}