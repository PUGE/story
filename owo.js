"use strict";
// Created by PUGE on 2016/7/24.

//                                         分割字符串
//                                     返回值类型：字符串
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
// [参数]            original             before                   after                index 
// [含义]           欲截取字符串       开始截取的标示(字符串)     结束截取的标示(字符串)     开始截取索引位置     
// [重要性]             必填                必填                     可选                  可选  
// [默认值]              无                 无                      null                   0   
// [类型 or 单位]       字符串              字符串                   字符串                  整数  
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
function cutString(original, before, after, index){
    index=index||0;
    if (typeof index === "number"){var P = original.indexOf(before, index);
        if (P>-1) {
            if (after) {var f = original.indexOf(after, P + 1);
                if (f>-1) {return original.substring(P + before.toString().length, f);}
                else {console.error("owo [在文本中找不到 参数三 "+after+"]");}
            }else {return original.substring(P + before.toString().length);}
        }else {console.error("owo [在文本中找不到 参数一 "+before+"]");}
    }else{console.error("owo [sizeTransition:"+index+"不是一个整数!]");}
}

//                                         分割字符串
//                                     返回值类型：字符串组
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
// [参数]            original             before                   after                index 
// [含义]           欲截取字符串       开始截取的标示(字符串)     结束截取的标示(字符串)     开始截取索引位置     
// [重要性]             必填                必填                     可选                  可选  
// [默认值]              无                 无                      null                   0   
// [类型 or 单位]       字符串              字符串                   字符串                  整数  
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

function cutStringArray(original, before, after, index) {
    var aa = [],ab = 0;
    while (original.indexOf(before, index) > 0) {
        aa[ab] = cutString(original, before, after, index);
        index = original.indexOf(before, index) + 1;
        ab++;
    }
    return aa;
}

//             在指定元素后追加元素
//               返回值类型：无
//－－－－－－－－－－－－－－－－－－－－－－－－－－－
// [参数]            Object          before   
// [含义]           欲添加元素       被追加的目标    
// [重要性]           必填             必填   
// [默认值]            无               无    
// [类型 or 单位]     Object          DOM元素 
//
// ｜---------------------------------------------示例-------------------------------------------------｜
// ｜   var a = document.createElement("li");                                                          ｜
// ｜   a.setAttribute("class", "mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left");    ｜
// ｜   a.innerHTML = "asd";                                                                           ｜
// ｜   var b =document.getElementById("id");                                                          ｜
// ｜   insertTagAfter(b,a);                                                                           ｜
// ｜--------------------------------------------------------------------------------------------------｜

function insertTagAfter(Target,Object) {
    if(typeof Target === "string") Target=document.getElementById(Target);
    var parent = Target.parentNode;
    if (parent.lastChild === Target) {
        parent.appendChild(Object);
    } else {
        parent.insertBefore(Object, Target.nextSibling);
    }
}

//                                        给一个数组添加元素
//                                       返回值类型：字符串组
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
// [参数]            Object          before                                 command
// [含义]           欲添加元素       被追加的数组     1-直接追加，2-如果包含相同元素就不追加，3-有相同元素不追加并删除那个元素
// [重要性]           必填             必填                                    必填
// [默认值]            无               无                                     无
// [类型 or 单位]     string          string[]                               number
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

function appendElement(Object,before, command) {
    if (command === 0) {return (before.concat(Object));} 
    else if (command === 1) {
        if (before.indexOf(Object) < 0) {return (before.concat(Object));} 
        else {return before;}
    } 
    else {
        if (before.indexOf(Object) < 0) {return (before.concat(Object));} 
        else {
            Array.prototype.remove = function(e) {
                var d = this.indexOf(e);
                if (d > -1) {this.splice(d, 1);}
            };
            before.remove(Object);
            return before;
        }
    }
}

//         字符串转DOM对象
//         返回值类型：DOM
//－－－－－－－－－－－－－－－－－
// [参数]                str      
// [含义]           欲转换的字符串 
// [重要性]             必填         
// [默认值]              无            
// [类型 or 单位]       string     
//
// ｜----------------------------示例-----------------------------------｜
// ｜   var strDom = "<div id='strDom'>hi<li>good</li></div>"           ｜
// ｜   var node = string_to_DOM(strDom);                               ｜
// ｜   console.log(node[0].getElementsByTagName("li")[0].innerHTML);   ｜
// ｜   输出结果为 good                                                 ｜ 
// ｜-------------------------------------------------------------------｜

function stringToDOM(str) {
    var a = document.createElement("div");
    a.innerHTML = str;
    return a.childNodes;
}

//         隐藏/显示 元素
//         返回值类型：无
//－－－－－－－－－－－－－－－－－
// [参数]                Dom      
// [含义]               Dom节点 
// [重要性]             必填         
// [默认值]              无            
// [类型 or 单位]        Dom   
//－－－－－－－－－－－－－－－－－
function hideElement(Dom) {
    if (Dom.style.display === "none") {
        Dom.style.display = "";
    } else {
        Dom.style.display = "none";
    }
}

//         获得元素标签类型
//          返回值类型：无
//－－－－－－－－－－－－－－－－－
// [参数]                target      
// [含义]               目标元素 
// [重要性]               必填         
// [默认值]                无            
// [类型 or 单位]     字符串 or DOM   
//－－－－－－－－－－－－－－－－－
function getTagName(target){
	if(typeof target === "string") {target=document.getElementById(target);}
	return target.tagName;
}

//          获得JSON的长度
//          返回值类型：整数
//－－－－－－－－－－－－－－－－－
// [参数]                jsonData      
// [含义]                  JSON 
// [重要性]                必填         
// [默认值]                 无            
// [类型 or 单位]          JSON 
//－－－－－－－－－－－－－－－－－
function getJsonLength(jsonData){
	var jsonLength = 0;
	for(var item in jsonData){
		jsonLength++;
	}
	return jsonLength;
}

//数组排序
//var a =[1111,222,432,12213];
//document.write(array_sort(a));
//结果为222,432,1111,12213
function array_sort(array) {
    return(array.sort(function(a,b){
        return a-b;
    }));
}


//纯文本方式更改元素内容
function textContent(element,value){
    var content = element.textContent;
    if(value === undefined) {
        if (content!==undefined) return content;
        else return element.innerText;
    }
    else{
        if(content !== undefined) element.textContent =value;
        else element.innerText=value;
    }
}

//包裹元素
//原HTML内容：<div id="myid"></div>
//var b = document.createElement("aa"); package_element(b,"myid");
//最后HTML内容：<aa><div id="myid"></div></aa>
function package_element(Object,Target) {
    if(typeof Target === "string") Target=document.getElementById(Target);
    var parent = Target.parentNode;
    parent.replaceChild(Object,Target);
    Object.appendChild(Target);
}

//select添加option选项
//使用示例 var selectValues = { "1": "test 1", "2": "test 2","4":"kkkk" };
//        package_element(selectValues,"mySelect");
function package_element(JSON,SelectID) {
    var output = [];
    for (var key in JSON) {
        output.push('<option value="' + key + '">' + JSON[key] + '</option>');
    }
    document.getElementById(SelectID).innerHTML=output.join('');
}

//求一段字符串在另一段字符串中出现的次数
function getTextSum(original,text){
	return((original.match(eval("/"+text+"/g"))||[]).length);
}
