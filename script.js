const pictures = [ 
    "BrBa van.jpg",
    "BrBa.jpg",
    "heisenberg.jpg"
];

const slideDelay = 3000;
const picturesNumber = pictures.length;

var myPicture = document.getElementById("slideshow-image");

var counter = 0;

var slide = setInterval( next, slideDelay);

function previous() {
    clearInterval(slide);
    counter = (counter - 1 + picturesNumber)%picturesNumber;
    myPicture.setAttribute("src", pictures[counter]);
    slide = setInterval( next, slideDelay);
}

function next() {
    clearInterval(slide);
    counter = (counter + 1)%picturesNumber;
    myPicture.setAttribute("src", pictures[counter]);
    slide = setInterval( next, slideDelay);
}

document.getElementById("left-button").onclick = previous;
document.getElementById("right-button").onclick = next;