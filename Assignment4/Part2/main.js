const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const picArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const picAltText ={
    'pic1.jpg': 'Close=up of an eye.',
    'pic2.jpg': 'A sandy beach with waves.',
    'pic3.jpg': 'A close-up of flowers',
    'pic4.jpg': 'Ancient Egyptian hieroglyphs',
    'pic5.jpg': 'A moth or butterfly on a leaf'
}

/* Looping through images */


for(let i = 0; i <= picArray.length; i++){
    const newImage = document.createElement('img');
    newImage.addEventListener()
    newImage.setAttribute('src', picArray[i]);
    newImage.setAttribute('alt', picAltText[picArray[i]]);
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
    else if(btn.getAttribute('class') == 'light'){
        btn.setAttribute('class', 'dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})

    btn.setAttribute("class", xxx);
    btn.textContent = xxx;
    overlay.style.backgroundColor = xxx;