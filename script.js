document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});

let isLiked = false;
let likeCount = 10;

function toggleLike() {
    let button = document.getElementById("likeBtn");
    let countDisplay = document.getElementById("likeCount");

    if (!isLiked) {
        likeCount++;
        button.classList.add("liked");
    } else {
        likeCount--;
        button.classList.remove("liked");
    }

    countDisplay.textContent = " "+ likeCount;
    isLiked = !isLiked;
}