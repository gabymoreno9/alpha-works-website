const slideInfo = [
  //intro
  {
    title: "Hi I am Taofeek Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "",
  },
];
 
//This code toggles the navBar 
const toggleNav = document.getElementById('navRemove')
toggleNav.addEventListener('click', ()=>{
    let boxDel= document.getElementById('navBoxDel')
  if(boxDel.style.display==="flex"){
    boxDel.style.display = "none"
    console.log("Azy")
  }
  else{
    boxDel.style.display = "flex"
  }
})