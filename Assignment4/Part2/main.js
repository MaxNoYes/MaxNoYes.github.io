//Name: Max Noyes
//File: main.js
//Date: 12 April 2024
//Javascirpt for part2

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const picArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */

const picAltText ={
    'images/pic1.jpg': 'Close up of an eye.',
    'images/pic2.jpg': 'A sandy beach with waves.',
    'images/pic3.jpg': 'A close-up of flowers',
    'images/pic4.jpg': 'Ancient Egyptian hieroglyphs',
    'images/pic5.jpg': 'A moth or butterfly on a leaf'
}

/* Looping through images */


for(let i = 0; i < picArray.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', picArray[i]);
    newImage.setAttribute('alt', picAltText[picArray[i]]);
    newImage.setAttribute('class', 'thumb-img');
    newImage.addEventListener('click', function(){
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
    })
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
    if(btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute('class', 'dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})