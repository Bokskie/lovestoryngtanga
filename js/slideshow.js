var i = 0;
var images = [];
var time = 9000;

images[0] = './image/img1.jpg';
images[1] = './image/img10.jpg';
images[2] = './image/img9.jpg';
images[3] = './image/img8.jpg';
images[4] = './image/img5.jpg';
images[5] = './image/img3.jpg';
images[6] = './image/img2.jpg';
images[7] = './image/img7.jpg';



function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

    window.onload = changeImg;