//loops through and initializes the number of pieces in the html
for(let i = 0; i < 100; i++){
    document.querySelector(".logo-container").innerHTML += `
        <div class="logo-part"><img class="logoPortion rotatePiece" src="./img/mb-logo.png"></img></div>`;
}

//runs rotate function at start of page
rotate();

//rotate function
function rotate(){
    //selects all pieces
    console.log("rotatetest")
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

//executes the dom for events when mouse moves in the nav bar
document.querySelector(".mb-nav").addEventListener("mouseover", navMouseOver);

//when mouse moves inside nav bar
function navMouseOver(event){
    //gets mouse height position within the nav
    var y = event.clientY;
    //check to make sure the mouse is physically within the nav
    if(y < 108){
        console.log("intest")
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
        //executes when mouse moves outside nav bar
        document.querySelector(".mb-nav").addEventListener("mouseout", navMouseOut);
    }
}

//when mouse moves outside nav bar
function navMouseOut(){
    console.log("outtest")
    let logoPortion = document.querySelectorAll(".logoPortion");
    for(let i = 0; i < logoPortion.length; i++){
        logoPortion[i].style.left = null;
        logoPortion[i].style.top = null;
    }
    rotate();
    //removes event listener since already outside nav bar
    document.querySelector(".mb-nav").removeEventListener("mouseout", navMouseOut);
}

