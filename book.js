let currentPage = 0;
const book = document.querySelector(".book");
const pages = document.querySelectorAll(".page-wrapper .page");
const totalPages = pages.length;

function flipPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
    } else {
        currentPage = 0;  // Reset to the first page
    }

    book.style.transform = `rotateY(${currentPage * -180}deg)`;
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(flipPage, 3000);  // Automatically flip pages every 3 seconds
});
