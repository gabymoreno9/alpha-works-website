//array of objects used for text animation
const words = [
    {text: "Developer"},
    {text: "Programmer"},
    {text: "Gamer"},
    {text: "Artist"},

];

//initialization of the timer counter
let timer = 0;

//loops through and initializes the number of pieces in the html
for(let i = 0; i < 100; i++){
    document.querySelector(".logo-container").innerHTML += `
        <div class="logo-part"><img class="logoPortion rotatePiece" src="./img/mb-logo.png"></img></div>`;
}

//runs rotate function at start of page
rotate();
//runs textAnimation function at start of page
textAnimation(words);

//rotate function
function rotate(){
    //selects all pieces
    let logoPortion = document.querySelectorAll(".rotatePiece");

    //initial origin of first piece
    let xOrigin = 5;
    let yOrigin = 5;

    //loop through all pieces
    for(let i = 0; i < logoPortion.length; i++){
        //checks for the end of row to add to the y-axis and reset x-axis
        if(i % 10 == 0 && i != 0){
            yOrigin += 10;
            xOrigin = 5;
        }

        //sets the origin of each piece based on it's own unique origin
        logoPortion[i].style.transformOrigin = `${xOrigin}px ${yOrigin}px`;
        //animates the piece to rotate infinitely
        logoPortion[i].animate({transform: "rotate(360deg)"}, {duration: 5000, iterations: Infinity, easing: "linear"})

        //updates x-axis
        xOrigin += 10;
    }
}

//function that takes in the words
async function textAnimation(words){
    let i = 0;

    //loops through words array
    while(true){
        //stores each word
        let word = words[i].text;
        //splits word into an array of letters
        let wordArray = word.split("");

        //loops through letters array
        for(let j = 0; j < wordArray.length; j++){
            //waits for 150ms between each letter
            await sleep(100);
            //adds letter to document
            document.getElementById("textIdentity").innerHTML += wordArray[j];
        }
        //waits 1s to allow user to read word
        await sleep(1000);
        //delete function for word executes after waiting for the previous line
        await deleteLetter();
        //increment i
        i++;
        //checks to see if i is at end of array of objects
        if(i >= words.length) {
            //resets i to repeat array of objects
            i = 0;
        }
    }
}

async function deleteLetter(){
        //grabs current word
        let deleteWord = document.getElementById("textIdentity").innerHTML;
        //splits word into array of letters
        let deleteLetters = deleteWord.split("");
        //while deleteLetters still contains letters it loops
        while(deleteLetters.length > 0){
            await sleep(100);
            //pops the last letter
            deleteLetters.pop();
            //adds letters as a string to the dom
            document.getElementById("textIdentity").innerHTML = deleteLetters.join("");
        }
}

//function that pauses based on time parameter
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//executes the dom for events when mouse moves in the nav bar
document.querySelector(".mb-nav").addEventListener("mouseenter", navMouseOver);

//when mouse moves inside nav bar
function navMouseOver(event){
    //gets mouse height position within the nav
    var y = event.clientY;
    //check to make sure the mouse is physically within the nav
    if(y < 108){
        let logoPortion = document.querySelectorAll(".logoPortion");
    
        let leftCounter = 0;
        let topCounter = 0;
    
        //loops through all pieces
        for(let i = 0; i < logoPortion.length; i++){
            //loops through all animations on each piece
            logoPortion[i].getAnimations().forEach(
                //executes function for each animation
                function(animation){
                    //checks for animation created by js
                    if(animation.constructor.name === "Animation"){
                        //cancels the rotation animation
                        animation.cancel();
                    }
                }
            )
            //sets x-axis final postion for piece after transition
            logoPortion[i].style.left = (leftCounter * -10) + "px";
    
            //updates the x-axis
            leftCounter++;
    
            //check to reset x-axis on new row
            if(leftCounter > 9){
                leftCounter = 0;
            }
    
            //check to update y-axis on new row
            if(i % 10 == 0 && i != 0){
                topCounter -= 10;
            }
    
            //sets y-axis final postion for piece after transition
            logoPortion[i].style.top = topCounter + "px";
        }
        //adds href to link once animation starts
        document.querySelector(".navHome").href = "../../index.html";
        //executes when mouse moves outside nav bar
        document.querySelector(".mb-nav").addEventListener("mouseleave", navMouseOut);
    }
}

//when mouse moves outside nav bar
function navMouseOut(){
    //removes href so that the pieces don't link to home page
    document.querySelector(".navHome").removeAttribute("href");

    let logoPortion = document.querySelectorAll(".logoPortion");
    for(let i = 0; i < logoPortion.length; i++){
        logoPortion[i].style.left = null;
        logoPortion[i].style.top = null;
    }
    rotate();
    //removes event listener since already outside nav bar
    document.querySelector(".mb-nav").removeEventListener("mouseleave", navMouseOut);
}

//select all text in table
let table = document.querySelectorAll(".tableText");

//loops through list and adds event listeners to each text
for(let i = 0; i < table.length; i++){
    table[i].addEventListener('mouseenter',hoverSkills);
}

//function that runs when mouse enters element
function hoverSkills(event){
    //randomizes number for each part of the color
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    //sets the color to randomized combination
    event.target.style.color = `rgba(${red}, ${green}, ${blue})`;
    event.target.classList.add("expand");
    //adds event listener for mouse leaving
    event.target.addEventListener('mouseleave',offSkills);
}

//function runs when mouse leaves element
function offSkills(event){
    //removes color
    event.target.style.color = null;
    event.target.classList.remove("expand");
}

document.querySelector(".myName").addEventListener("click", mouseChange);

function mouseChange(){
    document.body.classList.add("cursor");
}