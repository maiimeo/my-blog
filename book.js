let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length / 2;  // Divide by 2 because each page is in pairs (left-right)

function changePage(direction) {
    currentPage += direction;
    if (currentPage < 0) {
        currentPage = totalPages - 1;
    } else if (currentPage >= totalPages) {
        currentPage = 0;
    }

    const book = document.querySelector(".book");
    book.style.transform = `translateX(-${currentPage * 50}%)`;
}
