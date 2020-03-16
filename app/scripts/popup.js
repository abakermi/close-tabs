

var myObject = new Vue({
    el: '#app',
    data: {message: 'Hello Vue!'},
    methods:{
        closeAll(){
            console.log("closed...");
            var allTabsID=[]
            var currentTabId
            chrome.tabs.getSelected(null, function(tab) {
                currentTabId=tab.id;
                console.log(currentTabId);
                chrome.tabs.query({}, function(tabs){
                    tabs.forEach(tb => {
                        allTabsID.push(tb.id);
                    });
                    allTabsID=allTabsID.filter(function(t){
                        return t!==currentTabId
                    })
                    console.log(allTabsID);
                    chrome.tabs.remove(allTabsID,function(){
                        console.log("removed");
                    })
                });
             

            })
         
        }
    }
})
function getAlltabs(){
    chrome.tabs.query({}, function(tabs){
        tabs.forEach(tb => {
            console.log(tb.id);
        });
    });
    // chrome.tabs.getAllInWindow(null, function(tabs){
    //     console.log(tabs);
    //     for (var i = 0; i < tabs.length; i++) {
    //     console.log(tabs[i].id);                      
    //     }
    // });
}