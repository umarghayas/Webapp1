var hours = document.getElementById("hours")
var mins = document.getElementById("mins")
var sec = document.getElementById("sec")
var ms = document.getElementById("ms")

var hoursCount = 0;
var minsCount = 0;
var secCount = 0;
var msCount = 0;
var interval;
// console.log(mins.innerHTML, sec.innerHTML, ms.innerHTML)
function startTimer(ele){
    console.log(ele)
    // ele.setAttribute("disabled","true")
    ele.disabled = true
    interval = setInterval(function (){
        msCount++;
        ms.innerHTML = msCount;
        if(msCount == 100){
            secCount++;
            msCount = 0;
            ms.innerHTML = msCount;
            sec.innerHTML = secCount;
        }
    }, 10)

}
function stopTimer(ele){
    clearInterval(interval)
    console.log(ele.previousElementSibling)
    ele.previousElementSibling = 
    // ele.previousElementSibling.setAttribute("disabled","false")
}
function Reset(ele){

}
