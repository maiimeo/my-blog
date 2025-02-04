// Function to set the background with food icons
function setFoodBackground() {
    const foodBackgroundImage = 'url("https://i.imgur.com/FRz5L8e.jpeg")'; 
    const foodBackgroundSize = 'cover'; 
    const foodBackgroundPosition = 'center';

   
    const travelPage = document.querySelector('.travel-page');
    travelPage.style.backgroundImage = foodBackgroundImage;
    travelPage.style.backgroundSize = foodBackgroundSize;
    travelPage.style.backgroundPosition = foodBackgroundPosition;
    travelPage.style.backgroundRepeat = 'no-repeat'; 
}


window.onload = setFoodBackground;
