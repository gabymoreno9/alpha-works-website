//executes the dom for events when mouse moves in the nav bar
document.querySelector(".mb-nav").onmouseover = function() {navMouseOver(event)};
document.querySelector(".mb-nav").onmouseout = function() {navMouseOut()};

function navMouseOver(event){
    //gets mouse height position within the nav
    var y = event.clientY;

    //check to make sure the mouse is physically within the nav
    if(y < 108){
        let logoPortion = document.querySelectorAll(".logoPortion");
    
        let leftCounter = 0;
        let topCounter = 0;
    
        for(let i = 0; i < logoPortion.length; i++){
            logoPortion[i].style.left = (leftCounter * -10) + "px";
    
            leftCounter++;
    
            if(leftCounter > 9){
                leftCounter = 0;
            }
    
            if(i % 10 == 0 && i != 0){
                topCounter -= 10;
            }
    
            logoPortion[i].style.top = topCounter + "px";
    
        }
    }
}

function navMouseOut(){
    let logoPortion = document.querySelectorAll(".logoPortion");
    for(let i = 0; i < logoPortion.length; i++){
        logoPortion[i].style.left = null;
        logoPortion[i].style.top = null;
    }

}