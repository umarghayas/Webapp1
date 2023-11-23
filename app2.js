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
function startTimer(ele) {
    console.log(ele.nextElementSibling)
    ele.nextElementSibling.disabled = false
    ele.nextElementSibling.nextElementSibling.disabled = false

    // ele.setAttribute("disabled","true")
    ele.disabled = true
    interval = setInterval(function () {
        msCount++;
        ms.innerHTML = msCount;
        if (msCount == 100) {
            secCount++;
            msCount = 0;
            ms.innerHTML = msCount;
            sec.innerHTML = secCount;
            if(secCount == 60){
                minsCount++;
                secCount = 0;
                mins.innerHTML = minsCount;
                sec.innerHTML = secCount
                if(minsCount == 60){
                    hoursCount++;
                    minsCount = 0;
                    hours.innerHTML = hoursCount
                    mins.innerHTML = minsCount
                }
            }
        }
    }, 10)

}
function stopTimer(ele) {
    clearInterval(interval)
    console.log(ele.previousElementSibling)
    ele.previousElementSibling.disabled = false
    // ele.previousElementSibling.setAttribute("disabled","false")
}
function Reset(ele) {
    clearInterval(interval)
    ele.previousElementSibling.previousElementSibling.disabled = false
    ele.disabled = true
    ele.previousElementSibling.disabled = true
    hoursCount = 0;
    minsCount = 0;
    secCount = 0;
    msCount = 0;
    hours.innerHTML = "00"
    mins.innerHTML = "00"
    sec.innerHTML = "00"
    ms.innerHTML = "00"
}
