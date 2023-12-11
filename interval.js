
// console.log(fullDate.getHours())
// console.log(fullDate.getMinutes())
// console.log(fullDate.getSeconds())

function setTime() {
    let fullDate = new Date;
    // console.log('ay7ga')
    document.getElementById('hours').innerHTML = fullDate.getHours();
    document.getElementById('minutes').innerHTML = fullDate.getMinutes();
    document.getElementById('seconds').innerHTML = fullDate.getSeconds();
}

setInterval(setTime, 1000);
let counter = 0;
function recursion(){
    counter++;
    let t1 = setTimeout(() => {
        recursion();
    }, 1000);
    if (counter>10) {
        clearTimeout(t1);
    }
    console.log('recursion');

}

recursion();