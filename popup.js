let changeColor=document.getElementById("changeColor");

//获取color变量
chrome.storage.sync.get("color",function(data){
    //设置颜色
    changeColor.style.backgroundColor=data.color;
    changeColor.setAttribute("value",data.color);
    console.log("color change");
});

//button添加交互
changeColor.onclick=function (element) {
    let color=element.target.value;
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code:"document.body.style.backgroundColor='"+color+"';"}
        )
    })
};