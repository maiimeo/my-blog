let currentPage = 0;
const pages = document.querySelectorAll(".page");

function changePage(direction) {
    currentPage += direction;
    if (currentPage < 0) {
        currentPage = pages.length - 1;
    } else if (currentPage >= pages.length) {
        currentPage = 0;
    }

    const bookContainer = document.querySelector(".book-container");
    bookContainer.style.transform = `translateX(-${currentPage * 100}%)`;
}
