var images = ["/Front-End/Project/Music/Landing-Page/Langing-Page-Image/Thumb/slider/t1.webp", "/Front-End/Project/Music/Landing-Page/Langing-Page-Image/Thumb/slider/t2.webp", "/Front-End/Project/Music/Landing-Page/Langing-Page-Image/Thumb/slider/t3.webp", "/Front-End/Project/Music/Landing-Page/Langing-Page-Image/Thumb/slider/t4.jpg"]
var img = document.getElementById("slider-img")
var index = 0
function next() {
    if (index == images.length - 1)
        index = 0
    else
        index++
    img.src = images[index]
}

var time = setInterval(next, 2000)
var flag = 1
function playPause() {
    if (flag == 1) {
        clearInterval(time)
        flag = 2
    }
    else {
        time = setInterval(next, 2000)
        flag = 1
    }
}