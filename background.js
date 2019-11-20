//插件安装事件
chrome.runtime.onInstalled.addListener(function(){
    //存储一个color变量
    chrome.storage.sync.set({color:'#3aa757'},function(){
        console.log("The color is green.");
    });
    //注册页面改变事件, 当页面改变时
    chrome.declarativeContent.onPageChanged.removeRules(undefined,function(){
        //配置规则
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions:[new chrome.declarativeContent.PageStateMatcher({//配置条件
                pageUrl:{hostEquals:"www.baidu.com"},
            })],
            actions:[new chrome.declarativeContent.ShowPageAction()]//配置成功时动作, 显示工具栏按钮(不置灰)
        }])
    })
});