// Function to set the background with food icons
function setFoodBackground() {
    const foodBackgroundImage = 'url("https://i.imgur.com/T0dH0UQ.jpeg")'; 
    const foodBackgroundSize = '100%'; 
    const foodBackgroundPosition = 'center';
    const foodBackgroundAttachment = 'fixed';

   
    const travelPage = document.querySelector('.travel-page');
    travelPage.style.backgroundImage = foodBackgroundImage;
    travelPage.style.backgroundSize = foodBackgroundSize;
    travelPage.style.backgroundPosition = foodBackgroundPosition;
    travelPage.style.backgroundRepeat = 'no-repeat'; 
    travelPage.style.backgroundAttachment = foodBackgroundAttachment;
}


window.onload = setFoodBackground;
