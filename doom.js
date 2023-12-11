var images = Array.from(document.querySelectorAll('.card-img-top'));
var upfrontImg = document.querySelector('.mainImg');
var nextArrow = document.querySelector('#next');
var prevArrow = document.querySelector('#prev');
var closElement = document.querySelector('#close')
var currentIndex= 0;


images.forEach(image => {
    image.addEventListener('click',changeSrc)
    function changeSrc() {
        currentIndex = images.indexOf(image)
        upfrontImg.classList.replace('d-none','d-flex')
        upfrontImg.style.backgroundImage = `url(${image.src})`
    }
});

// nextArrow.addEventListener('click',nextImg)
// prevArrow.addEventListener('click',prevImg)
closElement.addEventListener('click',closeImg)

// function nextImg() {
//     if (currentIndex == images.length-1) {
//         currentIndex = 0 ;
//     } else {
//         currentIndex+=1;
//     }
//     var img = images[currentIndex]
//     upfrontImg.style.backgroundImage = `url(${img.src})`
// }
// function prevImg() {
//     if (currentIndex) {
//         currentIndex-=1 
//     }
//     else{
//         currentIndex = images.length -1
//     }
//     var img = images[currentIndex]
//     upfrontImg.style.backgroundImage = `url(${img.src})`
// }

function closeImg() {
    upfrontImg.classList.replace('d-flex','d-none')
}

nextArrow.addEventListener('click',function(){
    slide(1)
})
prevArrow.addEventListener('click',function(){
    slide(-1)
})


function slide(i) {
    currentIndex = currentIndex + i ;
    if (currentIndex == images.length-1) {
        currentIndex = 0 ;
    } 
    else if(currentIndex < 0) {
        currentIndex = images.length -1 ;
    }
    var img = images[currentIndex]
    upfrontImg.style.backgroundImage = `url(${img.src})`
}

document.addEventListener('keydown',function(e){
    console.log('fsdklaj')
    if (e.key == 'ArrowRight') {
        slide(1)
    } else if ( e.key == 'ArrowLeft') {
        slide(-1)
    }
    else if ( e.key == 'Escape')
    {
        closeImg();
    }
})
