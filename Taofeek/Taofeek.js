const slideInfo = [
  //intro
  {
    title: "Hi I am Taofeek Badmus",
    desc: "Software Developer and Xenophile ",
    descImg: "/Taofeek/img/Untitled.svg",
    bodyText: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus consequatur nesciunt blanditiis ex? Error quod quis ea maxime neque eveniet? Cumque quia nihil aliquid ratione"
  },

];

//This code toggles the navBar 
const toggleNav = document.getElementById('navRemove')
toggleNav.addEventListener('click', () => {
  let boxDel = document.getElementById('navBoxDel')
  if (boxDel.style.display === "flex") {
    boxDel.style.display = "none"
    console.log("Azy")
  }
  else {
    boxDel.style.display = "flex"
  }
})

/**
 *   <div class="z-40 w-25 md:w-4/5 lg:4/5 border-1 flex-col m-auto p-4">
    <h1 class="text-white text-4xl md:text-7xl lg:text-7xl font-semibold text-center md:text-justify lg:text-justify"> Lorem is Dopest</h1>
    <div class="flex flex-col md:flex-row lg:flex-row">
      <div class="bg-white self-center md:self-end lg:self-end md:w-1/6 lg:w-1/6">
        <svg width="82" height="49" viewBox="0 0 82 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
          d="M15.4766 0.328125L15.7578 4.08984H14.7031L14.1055 1.74609H9.10156V16.7344L11.6797 17.0039V18H4.35547V17.0039L6.91016 16.7344V1.74609H1.92969L1.29688 4.08984H0.265625L0.546875 0.328125H15.4766ZM28.9648 17.3906C27.8242 17.9766 27 18.2695 26.4922 18.2695C25.3516 18.2695 24.7812 17.7852 24.7812 16.8164V16.4531C24.6719 16.6172 24.3711 16.8555 23.8789 17.168C23.3945 17.4805 23.0156 17.6992 22.7422 17.8242C22.0938 18.1211 21.6016 18.2695 21.2656 18.2695C20.9297 18.2695 20.6523 18.2539 20.4336 18.2227C20.2148 18.1992 19.9883 18.1484 19.7539 18.0703C19.5195 17.9922 19.2891 17.8828 19.0625 17.7422C18.8359 17.6016 18.6328 17.418 18.4531 17.1914C18.0547 16.6914 17.8555 16.0391 17.8555 15.2344C17.8555 14.125 18.25 13.3516 19.0391 12.9141C19.5391 12.625 20.0664 12.4453 20.6211 12.375C21.1836 12.3047 21.6953 12.25 22.1562 12.2109C23.0312 12.1328 23.9062 12.0859 24.7812 12.0703V9.60938C24.7812 8.92969 24.6953 8.47656 24.5234 8.25C24.2344 7.85156 23.7852 7.65234 23.1758 7.65234C21.8164 7.65234 20.4805 8.09375 19.168 8.97656L18.4883 7.95703C20.3164 6.73828 21.9531 6.12891 23.3984 6.12891C24.6562 6.12891 25.5469 6.47656 26.0703 7.17188C26.4766 7.71094 26.6797 8.47656 26.6797 9.46875V15.6328C26.6797 16.2109 26.7891 16.5391 27.0078 16.6172C27.0859 16.6406 27.1875 16.6523 27.3125 16.6523C27.625 16.6523 28.1055 16.5312 28.7539 16.2891L28.9648 17.3906ZM24.7812 13.0547C22.5625 13.1406 21.1406 13.3633 20.5156 13.7227C20.0391 13.9961 19.8008 14.4375 19.8008 15.0469C19.8008 15.9297 20.1406 16.4727 20.8203 16.6758C21.0078 16.7305 21.2344 16.7578 21.5 16.7578C21.7734 16.7578 22.0898 16.7031 22.4492 16.5938C22.8086 16.4844 23.1406 16.3516 23.4453 16.1953C24.0234 15.9141 24.4688 15.6406 24.7812 15.375V13.0547ZM30.2305 12.3047C30.2305 11.4062 30.3828 10.5703 30.6875 9.79688C31 9.02344 31.4219 8.36719 31.9531 7.82812C33.0469 6.69531 34.3945 6.12891 35.9961 6.12891C37.8555 6.12891 39.3086 6.67969 40.3555 7.78125C41.3477 8.83594 41.8438 10.2148 41.8438 11.918C41.8438 13.8164 41.2812 15.3594 40.1562 16.5469C39.0625 17.6953 37.7109 18.2695 36.1016 18.2695C34.2656 18.2695 32.8125 17.7031 31.7422 16.5703C30.7344 15.5078 30.2305 14.0859 30.2305 12.3047ZM33.2305 8.8125C32.918 9.21094 32.6797 9.67969 32.5156 10.2188C32.3594 10.7578 32.2812 11.3438 32.2812 11.9766C32.2812 12.6016 32.3516 13.2148 32.4922 13.8164C32.6406 14.4102 32.8672 14.9375 33.1719 15.3984C33.8438 16.3984 34.8125 16.8984 36.0781 16.8984C37.2656 16.8984 38.1875 16.5078 38.8438 15.7266C39.4922 14.9609 39.8164 13.9258 39.8164 12.6211C39.8164 10.3086 39.1562 8.75391 37.8359 7.95703C37.3438 7.66016 36.7617 7.51172 36.0898 7.51172C35.418 7.51172 34.8516 7.62891 34.3906 7.86328C33.9297 8.08984 33.543 8.40625 33.2305 8.8125ZM53.6094 34.4297C53.6094 35.0391 53.5 35.5664 53.2812 36.0117C53.0703 36.457 52.8047 36.8398 52.4844 37.1602C51.9141 37.7148 51.2031 38.1523 50.3516 38.4727C51.7266 38.7383 52.7344 39.1484 53.375 39.7031C54.25 40.4688 54.6875 41.6094 54.6875 43.125C54.6875 44.4844 54.1641 45.6133 53.1172 46.5117C51.9688 47.5039 50.3594 48 48.2891 48H40.1562V47.0039L41.9375 46.7344V31.5938L40.1562 31.3242V30.3281H47.9727C49.8164 30.3281 51.2305 30.7031 52.2148 31.4531C53.1445 32.1562 53.6094 33.1484 53.6094 34.4297ZM44.1406 39.3398V46.5938H47.457C50.0508 46.5938 51.6211 45.8867 52.168 44.4727C52.3398 44.0273 52.4258 43.543 52.4258 43.0195C52.4258 42.4883 52.332 42.0039 52.1445 41.5664C51.9648 41.1211 51.6914 40.7344 51.3242 40.4062C50.5273 39.6953 49.4297 39.3398 48.0312 39.3398H44.1406ZM44.1406 31.7461V38.0625H47.4805C49.1367 38.0625 50.293 37.5 50.9492 36.375C51.1992 35.9531 51.3242 35.4141 51.3242 34.7578C51.3242 33.7109 51.0352 32.9492 50.457 32.4727C49.8789 31.9883 48.9609 31.7461 47.7031 31.7461H44.1406ZM67.1445 47.3906C66.0039 47.9766 65.1797 48.2695 64.6719 48.2695C63.5312 48.2695 62.9609 47.7852 62.9609 46.8164V46.4531C62.8516 46.6172 62.5508 46.8555 62.0586 47.168C61.5742 47.4805 61.1953 47.6992 60.9219 47.8242C60.2734 48.1211 59.7812 48.2695 59.4453 48.2695C59.1094 48.2695 58.832 48.2539 58.6133 48.2227C58.3945 48.1992 58.168 48.1484 57.9336 48.0703C57.6992 47.9922 57.4688 47.8828 57.2422 47.7422C57.0156 47.6016 56.8125 47.418 56.6328 47.1914C56.2344 46.6914 56.0352 46.0391 56.0352 45.2344C56.0352 44.125 56.4297 43.3516 57.2188 42.9141C57.7188 42.625 58.2461 42.4453 58.8008 42.375C59.3633 42.3047 59.875 42.25 60.3359 42.2109C61.2109 42.1328 62.0859 42.0859 62.9609 42.0703V39.6094C62.9609 38.9297 62.875 38.4766 62.7031 38.25C62.4141 37.8516 61.9648 37.6523 61.3555 37.6523C59.9961 37.6523 58.6602 38.0938 57.3477 38.9766L56.668 37.957C58.4961 36.7383 60.1328 36.1289 61.5781 36.1289C62.8359 36.1289 63.7266 36.4766 64.25 37.1719C64.6562 37.7109 64.8594 38.4766 64.8594 39.4688V45.6328C64.8594 46.2109 64.9688 46.5391 65.1875 46.6172C65.2656 46.6406 65.3672 46.6523 65.4922 46.6523C65.8047 46.6523 66.2852 46.5312 66.9336 46.2891L67.1445 47.3906ZM62.9609 43.0547C60.7422 43.1406 59.3203 43.3633 58.6953 43.7227C58.2188 43.9961 57.9805 44.4375 57.9805 45.0469C57.9805 45.9297 58.3203 46.4727 59 46.6758C59.1875 46.7305 59.4141 46.7578 59.6797 46.7578C59.9531 46.7578 60.2695 46.7031 60.6289 46.5938C60.9883 46.4844 61.3203 46.3516 61.625 46.1953C62.2031 45.9141 62.6484 45.6406 62.9609 45.375V43.0547ZM74.2578 36.1289C75.2344 36.1289 76.207 36.3203 77.1758 36.7031V30.6914L75.3828 30.3281V29.3789L79.0742 28.5117V46.125C79.0742 46.4766 79.2695 46.6523 79.6602 46.6523C80.0586 46.6523 80.5547 46.5312 81.1484 46.2891L81.3945 47.3906C80.2773 47.9766 79.4414 48.2695 78.8867 48.2695C78.082 48.2695 77.5547 48.0078 77.3047 47.4844C77.2188 47.2969 77.1758 47.0742 77.1758 46.8164C76.5898 47.332 75.9648 47.7031 75.3008 47.9297C74.6367 48.1562 73.9453 48.2695 73.2266 48.2695C72.5156 48.2695 71.8281 48.1328 71.1641 47.8594C70.5 47.5859 69.9453 47.1953 69.5 46.6875C68.6328 45.6953 68.1992 44.293 68.1992 42.4805C68.1992 40.7461 68.7109 39.2891 69.7344 38.1094C70.8672 36.7891 72.375 36.1289 74.2578 36.1289ZM74.2578 46.6289C75.0469 46.6289 76.0195 46.2578 77.1758 45.5156V38.8594C76.5039 37.9609 75.4336 37.5117 73.9648 37.5117C72.832 37.5117 71.9141 37.9688 71.2109 38.8828C70.5547 39.75 70.2266 40.8672 70.2266 42.2344C70.2266 43.4766 70.5391 44.4961 71.1641 45.293C71.8516 46.1836 72.8828 46.6289 74.2578 46.6289Z"
          fill="black" />
      </svg>
    </div>
    <div class="md:w-5/6 lg:w-5/6">
      <h3 class="text-white text-xl md:text-3xl lg:text-3xl text-center md:text-justify lg:text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus consequatur nesciunt blanditiis ex? Error
        quod quis ea maxime neque eveniet? Cumque quia nihil aliquid ratione dignissimos placeat esse delectus magni
        nostrum recusandae, sapiente quas culpa laudantium .
      </h3>
    </div>
  </div>
</div>
 */
const loadPageBody = () => {
  slideInfo.forEach((item) => {
    const slideItem = document.createElement('div')
    slideItem.className = "z-40 w-25 md:w-4/5 lg:4/5 border-1 flex-col m-auto p-4"
    slideItem.id = "slides"
    const headerIntro = document.createElement('h1')
    headerIntro.className = "text-white text-4xl md:text-7xl lg:text-7xl font-semibold text-center md:text-justify lg:text-justify"
    headerIntro.innerHTML = `${item.title}`
    slideItem.appendChild(headerIntro)
    document.getElementById('body_wrapper').appendChild(slideItem)

    const InnerFlex = document.createElement('div')
    InnerFlex.className = "flex flex-col md:flex-row lg:flex-row";
    const InnerFlexChild1 = document.createElement('div')
    InnerFlexChild1.className = "bg-white self-center md:self-end lg:self-end md:w-1/6 lg:w-1/6";
    const InnerFlexChildSvg = document.createElement('img')
    InnerFlexChildSvg.src = `${item.descImg}`
    const InnerFlexChild2 = document.createElement('div')
    InnerFlexChild2.className = "md:w-5/6 lg:w-5/6";
    const InnerFlexChild2Text = document.createElement('h3')
    InnerFlexChild2Text.className = "text-white text-xl md:text-3xl lg:text-3xl text-center md:text-justify lg:text-justify"
    InnerFlexChild2Text.innerHTML = `${item.bodyText}`
    const TriggerBtn = document.createElement('span')
    TriggerBtn.className = "flex p-3"
    TriggerBtn.id = "btn"
    const TriggerBtnChild1 = document.createElement('Button')
    TriggerBtnChild1.textContent = "MORE"
    TriggerBtnChild1.id = "tex_t"
    TriggerBtnChild1.className = "text-sm bg-trans mr-3"
    const TriggerBtnChild2 = document.createElement('Button')
    TriggerBtnChild2.innerHTML = "&#9759"
    TriggerBtnChild2.id = "ico_n"
    TriggerBtnChild2.className = "text-md bg-trans"
    slideItem.appendChild(InnerFlex)
    InnerFlex.appendChild(InnerFlexChild1)
    InnerFlexChild1.appendChild(InnerFlexChildSvg)
    InnerFlex.appendChild(InnerFlexChild2)
    InnerFlexChild2.appendChild(InnerFlexChild2Text)
    InnerFlexChild2Text.appendChild(TriggerBtn)
    TriggerBtn.appendChild(TriggerBtnChild1)
    TriggerBtn.appendChild(TriggerBtnChild2)
  })
}

loadPageBody()
// 

//Add eventlistener to more button
//If the button is clicked the following happens 1) The word more is changed to less 2) the Icon is turned downwards 3) The footer shows 

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