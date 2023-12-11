var images = document.querySelectorAll('.img-item')
var mainImg = document.querySelector('img')
console.log(mainImg)
console.log(images)

document.body.addEventListener('click',function(){

    // document.querySelector('audio').play();
})
// mainImg.setAttribute('id','new')
mainImg.classList.replace
images.forEach(image => {
    image.addEventListener('click',changeSrc)
    console.log(image.src)
    function changeSrc() {
        mainImg.src = image.src
    }
});

