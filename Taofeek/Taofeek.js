const slideInfo = [
  //intro
  {
    title: "Hi I am Taofeek Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit amet  Error quod quis ea maxime neque eveniet? Cumque quia nihil aliquid ratione",
    Date: "Mar 25 2015",
    footLeft: `
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    culpa quidem? Corporis illum et vel, ullam explicabo dicta ab sed, quasi
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRight: `
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    culpa quidem? Corporis illum et vel, ullam explicabo dicta ab sed, quasi
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRightList: ["1", "2", "3"],
  },
  {
    title: "Hi I am Azeezat Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit  Doloribus consequatur nesciunt blanditiis ex? Error quod quis ea maxime neque eveniet? Cumque quia nihil aliquid ratione",
    Date: "Mar 25 2016",
    footLeft: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    culpa quidem? Corporis illum et vel, ullam explicabo dicta ab sed, quasi
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRight: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRightList: ["10", "20", "30"],
  },
  {
    title: "Hi I am Sayo Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.s ea maxime neque eveniet? Cumque quia nihil aliquid ratione",
    Date: "Mar 25 2017",
    footLeft: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRight: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRightList: ["100", "200", "300"],
  },
  {
    title: "Hi I am Kami Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText:
      "  Lorem ipsum, dolor sit amet maxime neque eveniet? Cumque quia nihil aliquid ratione",
    Date: "Mar 25 2018",
    footLeft: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    culpa quidem? Corporis illum et vel, ullam explicabo dicta ab sed, quasi
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
    footRight: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reiciendis alias sapiente dolorem itaque cupiditate velit accusantium
    culpa quidem? Corporis illum et vel, ullam explicabo dicta ab sed, quasi
    tempore odio maxime voluptates modi unde natus ipsam quo, dolorum suscipit`,
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

const slideItems = (index) => {
  let item = slideInfo[index];

  let slideWrapper = document.getElementById("body_wrapper");
  slideWrapper.addEventListener("click", slideLeft);

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

  let dates = document.getElementById("date_");
  dates.innerHTML = `${item.Date}`;
  let footerLeft = document.getElementById("left_id");
  footerLeft.innerHTML = `${item.footLeft}`;
  let footerRight = document.getElementById("right_id");
  footerRight.innerHTML = `${item.footRight}`;
  let uL = document.getElementById("right_list");
  
  uL.innerHTML = `<li class="mt-2 mr-0 pl-7"><span>&#8667;</span> ${item.footRightList[0]}</li>
  <li class="mt-2 mr-0 pl-7"><span>&#8667;</span> ${item.footRightList[1]}</li>
 <li class="mt-2 mr-0 pl-7"><span>&#8667;</span> ${item.footRightList[2]}</li>`;
};
slideItems(0);


const footerItems = () => { };

let counter = 0;
function slideLeft() {
  console.log(counter);

  counter += 1;
  if (counter >= slideInfo.length) {
    counter = 0;
  }
  slideItems(counter);
  Increment();
}

//This is the tracker function
let barProgress = document.getElementById("bar");
let number = 0;
function Increment() {
  number += 10;
  if (number >= 100) {
    number = 0;
  }
  barProgress.style.width = number + "%";
}

//This toggles the footer using button
document.querySelector("#btn").addEventListener("click", showFooter);

function showFooter() {
  let _myFooter = document.querySelector("#show_Footer");
  display = window.getComputedStyle(_myFooter).display;
  if (display === "block") {
    _myFooter.style.display = "none";
    document.getElementById("tex_t").innerHTML = "LESS";
  } else {
    _myFooter.style.display = "block";
    document.getElementById("tex_t").innerHTML = "MORE";
    //keyframes
    document
      .getElementById("ico_n")
      .animate([{ transform: "rotate(360deg)" }], {
        duration: 1000,
        iterations: Infinity,
      });
    // timing options
  }
}

//Make the footer disappear onclick of the footer
document.querySelector("footer").addEventListener("click", remove_D);

function remove_D() {
  let Foot_body = document.querySelector("footer");
  let remove = window.getComputedStyle(Foot_body).display;
  if (remove === "block") {
    Foot_body.style.display = "none";
  } else {
    Foot_body.style.display = "block";
  }
}
