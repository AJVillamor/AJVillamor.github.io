(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;
    
    function changeImage() {
        images[currentIndex].classList.remove("active-image");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active-image");
    }
    
    const interval = setInterval(changeImage, 5000); // Change image every 3 seconds
    
})();
