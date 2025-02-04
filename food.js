// Function to set the background with food icons
function setFoodBackground() {
    const foodBackgroundImage = 'url("https://i.imgur.com/XU6duVP.jpeg")'; 
    const foodBackgroundSize = '80px 80px'; 
    const foodBackgroundRepeat = 'repeat';

   
    document.querySelector('.travel-page').style.backgroundImage = foodBackgroundImage;
    document.querySelector('.travel-page').style.backgroundSize = foodBackgroundSize;
    document.querySelector('.travel-page').style.backgroundRepeat = foodBackgroundRepeat;
}


window.onload = setFoodBackground;
