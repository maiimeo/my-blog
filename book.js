let currentPage = 0;
const book = document.querySelector(".book");
const pages = document.querySelectorAll(".page-wrapper .page");
const totalPages = pages.length;
const nextButton = document.getElementById("next-btn");

function flipPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
    } else {
        currentPage = 0;  // Reset to the first page
    }

    // Rotate the book by changing the Y-axis rotation
    book.style.transform = `rotateY(${currentPage * -180}deg)`;
}

// Event listener for the next button
nextButton.addEventListener("click", flipPage);
