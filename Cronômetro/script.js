var timer = document.getElementById('timer')
var [ms,sec,min,hour] = [0,0,0,0];
var int = null

document.getElementById('Start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int)
    }
    int = setInterval(displayTimer, 10)
})

function displayTimer(){
    ms+=10

    if(ms == 1000){
        sec++
        ms = 0
        if(sec == 60){
            min++
            sec = 0
            if(min == 60){
                hour++
                min = 0
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour
    let m = min < 10 ? "0" + min : min
    let s = sec < 10 ? "0" + sec : sec
    let mls = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms

    timer.innerHTML = `${h} : ${m} : ${s}.${mls}`
}


document.getElementById('Stop').addEventListener('click', ()=> {
    clearInterval(int)
})

document.getElementById('Reset').addEventListener('click', ()=>{
    clearInterval(int)
    timer.innerHTML = `00 : 00 : 00.000`
})
