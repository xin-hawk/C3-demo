var content = document.getElementsByClassName('content')[0];
var btn = document.getElementsByClassName('btn')[0];
btn.onclick = function(){
    slide(content,-410)
}
// 封装一个滑动的功能
function slide(dom,lenth){
    dom.style.transform = 'translateX(' + lenth + ')px';
}