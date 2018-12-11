// Your code goes here

//navigation link hover color change
const fontColorChange = (e) => {
    if (e.target.style.color === 'blue') {
        e.target.style.color = 'black';
        e.target.style.fontWeight = 'normal';
    } else {
        e.target.style.color = 'blue';
        e.target.style.fontWeight = 'bold';
    }
}
const navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mousemove', fontColorChange);
}

//hide images on double click
//can't get images to come back
const hideImage = (e) => {
    if(e.target.style.visibility === "hidden") {
        e.target.style.visibility = "visible";
    } else {
        e.target.style.visibility = "hidden"
    }
}
const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dblclick', hideImage);
}
//section mouseenter & mouseleave color change  
//use prevent propagation here?
const newColor = (e) => {
    if(e.target.style.backgroundColor === "lavender") {
        e.target.style.backgroundColor = "white";
    } else {
        e.target.style.backgroundColor = "lavender";
    }
}
const divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseenter', newColor);
}
//'sign me up' buttons onclick events