let n = 1
const string = `.skin *{margin: 0; padding: 0; box-sizing: border-box;}
.skin *::after{
  box-sizing: border-box;
}
.skin *::before{
  box-sizing: border-box;
}
.skin{
    position: relative;
     background-color: #ffe446;
     min-height:50vh
}
.nose .san{
    border: 12px solid;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    margin-left: -12px;
    margin-top: 175px;

}
.nose .yuan{
    position: absolute;
    border-radius: 8px 8px 0 0;
    background-color: black;
    width: 24px;
    height: 6px;
    left: 50%;
    margin-left: -12px;
    bottom: 12px;
}
.eye{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    border-radius: 50%;
    top: 130px;
    background-color: #2e2e2e;
}
.eye .yanzhu{
    position: absolute;
    background-color: white;
    border-radius: 50%;
    border: 3px solid black;
    left: 10px;
    top: 1px;
    width: 36px;
    height: 36px;
}
.lefteye{
    transform: translateX(-165px);
}
.righteye{
    transform: translateX(165px);
}
.face{
    position: absolute;
    width: 110px;
    height: 110px;
    border: 3px solid black;
    left: 50%;
    margin-left: -65px;
    top: 240px;
    border-radius: 50%;
    background-color:#fc0b1b;
}
.leftface{
transform: translateX(-210px);
}
.rightface{
    transform: translateX(210px);
    }
.upperLip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 210px;
    background: #FDE348;
    z-index: 10;
    }
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(
20deg);
}
.mouth .down{
    width: 164px;
    height: 240px;
    position: absolute;
    left: 50%;
    margin-left: -82px;
    top: 220px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    background-color:#990613;
    width: 130px;
    height: 1000px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -65px;
    border-radius: 90px/240px;
    overflow: hidden;
    
}
.mouth .yuan1 .yuan2{
    width: 160px;
    height: 200px;
    position: absolute;
    bottom: -90px;
    left: 50%;
    margin-left: -80px;
    border-radius: 90px;
    background-color: #f8485f;
}
`
let time = 100
let run = () => {//把定时器里面的内容定义为x
    n = n + 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substring(0, n)
    demo2.innerHTML = string.substring(0, n)
    demo.scrollTop = demo.scrollHeight
}
demo.innerText = string.substring(0, n)  //就算外面有style，但是我只在页面上输出文字效果，不会有style的样式
demo2.innerHTML = string.substring(0, n)  //代码写入style后不会在页面显示，但是会有样式效果
console.log(string.length)
let id = setInterval(run, time)
//模块化慢中快速模块
let slow = () => {
    window.clearInterval(id)
    time = 300
    id = setInterval(run, time);
}
let mid = () => {
    window.clearInterval(id)
    time = 100
    id = setInterval(run, time);
}
let fast = () => {
    window.clearInterval(id)
    time = 0
    id = setInterval(run, time);
}

btnPause.onclick = () => {
    window.clearInterval(id)
}
btnPlay.onclick = () => {
    id = setInterval(run, time);
}
btnSlow.onclick = slow
btnFast.onclick = fast
btnMid.onclick = mid