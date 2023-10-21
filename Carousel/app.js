
window.addEventListener('load', function () {

    const images = document.getElementsByTagName("img");
    const prevImage = document.getElementById("prev-btn");
    const nextImage = document.getElementById("next-btn");
    const indicators = document.getElementsByClassName("indicator");

    nextImage.addEventListener("click", showNextImage);
    prevImage.addEventListener("click", showPrevImage);

    let index = 0;
    let timer = setInterval(showNextImage, 3000);


    function showImage() {

        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        };

        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove("active");
        };

        images[index].classList.add("active");
        indicators[index].classList.add("active");
        timer = setInterval(showNextImage, 3000);
    }

    function showNextImage() {
        clearInterval(timer);

        if (index < images.length - 1) {
            index++;
        } else {
            index = 0;
        }
        showImage();
    }

    function showPrevImage() {
        clearInterval(timer);

        if (index > 0) {
            index--;
        } else {
            index = images.length - 1;
        }
        showImage();
    }

});







