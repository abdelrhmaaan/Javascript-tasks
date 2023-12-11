

// var image = document.querySelector('img')
var fire = document.querySelector('img')
// console.log(images)

// fire.style.left = '100px'


document.body.addEventListener('mousemove',function(e){
    console.log(e.clientX,e.clientY)
    fire.style.left = (e.clientX-25)+'px'
    fire.style.top = (e.clientY-25)+'px'
})