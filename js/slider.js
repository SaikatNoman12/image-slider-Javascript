
const images = [
    './images/pic-1.jpg',
    './images/pic-2.jpg',
    './images/pic-3.jpg',
    './images/pic-4.jpg',
    './images/pic-5.jpg',
    './images/pic-6.jpg',
    './images/pic-7.jpg',
    './images/pic-8.jpg'
]

const callDocumentImages = document.getElementById('image-slider'); 
let imageIndex = 0;

setInterval(() => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    callDocumentImages.setAttribute('src', images[imageIndex])
    imageIndex++;
}, 1000);