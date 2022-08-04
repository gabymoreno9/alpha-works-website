const slideInfo = [
  //intro
  {
    title: "Hi I am Taofeek Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit amet  Error quod quis ea maxime neque eveniet? Cumque quia nihil aliquid ratione",
    Date: "Mar 25 2015"
  },
  {
    title: "Hi I am Azeezat Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit  Doloribus consequatur nesciunt blanditiis ex? Error quod quis ea maxime neque eveniet? Cumque quia nihil aliquid ratione",
      Date: "Mar 25 2016"
  },
  {
    title: "Hi I am Sayo Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.s ea maxime neque eveniet? Cumque quia nihil aliquid ratione",
      Date: "Mar 25 2017"
  },
  {
    title: "Hi I am Kami Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit amet maxime neque eveniet? Cumque quia nihil aliquid ratione",
      Date: "Mar 25 2018"
  },
];

//This code toggles the navBar
const toggleNav = document.getElementById("navRemove");
toggleNav.addEventListener("click", () => {
  let boxDel = document.getElementById("navBoxDel");
  if (boxDel.style.display === "flex") {
    boxDel.style.display = "none";
  } else {
    boxDel.style.display = "flex";
  }
});

/**
 *   <div class="z-40 w-25 md:w-4/5 lg:4/5 border-1 flex-col m-auto p-4">
    <h1 class="text-white text-4xl md:text-7xl lg:text-7xl font-semibold text-center md:text-justify lg:text-justify"> Lorem is Dopest</h1>
    <div class="flex flex-col md:flex-row lg:flex-row">
      <div class="bg-white self-center md:self-end lg:self-end md:w-1/6 lg:w-1/6">
        
    </div>
    <div class="md:w-5/6 lg:w-5/6">
      <h3 class="text-white text-xl md:text-3xl lg:text-3xl text-center md:text-justify lg:text-justify">
       ${ite}
      </h3>
    </div>
  </div>
</div>

 */

const slideItems = (index) => {
  let item = slideInfo[index]

  let slideWrapper = document.getElementById("body_wrapper");
  slideWrapper.addEventListener("click", slideLeft)
  
    slideWrapper.innerHTML = `<div class="z-40 w-25 md:w-4/5 lg:4/5 border-1 flex-col m-auto p-4">
    <h1 class="text-white text-4xl md:text-7xl lg:text-7xl font-semibold text-center md:text-justify lg:text-justify">${item.title}</h1>
    <div class="flex flex-col md:flex-row lg:flex-row">
      <div class="bg-white self-center md:self-end lg:self-end md:w-1/6 lg:w-1/6">
      <img src= "${item.descImg}"/>
    </div>
    <div class="md:w-5/6 lg:w-5/6">
      <h3 class="text-white text-xl md:text-3xl lg:text-3xl text-center md:text-justify lg:text-justify">
        ${item.bodyText}
      </h3>
    </div>
    
  </div>
  
      </div>
    `;

    let dates = document.getElementById("date_")
    dates.innerHTML = `${item.Date}`
   
};
slideItems(0);

let counter = 0;
function slideLeft(){
  console.log(counter)

  counter+=1
 if(counter>=slideInfo.length){
  counter = 0;
 }
 slideItems(counter);
 Increment()
}


 //This is the tracker function
let barProgress = document.getElementById("bar")
let number= 0;
function Increment() {
number+=10;
if(number>=100){
  number = 0;
}
barProgress.style.width = number + "%";
}


//This toggles the footer using button
document.querySelector('#btn').addEventListener('click', showFooter)

function showFooter() {
  let _myFooter = document.querySelector('#show_Footer')
  display = window.getComputedStyle(_myFooter).display
  if (display === "block") {
    _myFooter.style.display = "none";
    document.getElementById('tex_t').innerHTML = "LESS"
  }
  else {
    _myFooter.style.display = "block"
    document.getElementById('tex_t').innerHTML = "MORE";
    //keyframes
    document.getElementById('ico_n').animate([
      { transform: "rotate(360deg)" }
    ],
      {
        duration: 1000,
        iterations: Infinity
      }
    )
    // timing options

}
}

//Make the footer disappear onclick of the footer
 document.querySelector('footer').addEventListener('click', remove_D)

function remove_D(){
let Foot_body = document.querySelector('footer')
 let remove = window.getComputedStyle(Foot_body).display
  if(remove === "block"){
    Foot_body.style.display = "none"
  }
  else {
    Foot_body.style.display = "block"
  }
}
