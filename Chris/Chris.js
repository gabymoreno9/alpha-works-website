const stars = 600

for(let i =0; i < stars; i++) { 
    let star = document.createElement("div")
    star.className = 'stars'
    xy = randomPostion();
    star.style.top = xy [0] + 'px'
    star.style.left = xy [1] + 'px'
    document.body.append(star)
}
    

function randomPostion() {
  y = window.innerWidth
  x = window.innerHeight
  randomX = Math.floor(Math.random() * x)
  randomY = Math.floor(Math.random() * y)
  return [randomX, randomY]
}

