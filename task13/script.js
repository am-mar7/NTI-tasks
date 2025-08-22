// first card 

const changecolorbtn = document.getElementById('changecolor')
const chnagedbody = document.getElementById('chnagedbody')
const chnagedtitle =document.getElementById('chnagedtitle') 
const chnagetitlecolorbtn = document.getElementById('chnagetitlecolor')
let orgcolor = true
let orgtitlecolor = true

function changecolor(){
    if(orgcolor){
        orgcolor = false
        chnagedbody.style.backgroundColor = "orange"
    }
    else{
        orgcolor = true
        chnagedbody.style.backgroundColor = "white"
    }
}
changecolorbtn.addEventListener('click', changecolor)

function changetitlecolor(){
    if(orgtitlecolor){
        orgtitlecolor = false
        chnagedtitle.style.color = "blue"
    }
    else{
        orgtitlecolor = true
        chnagedtitle.style.color = "black"
    }
}
chnagetitlecolorbtn.addEventListener('click', changetitlecolor)

// second card 
const rotatebtn = document.getElementById('rotatebtn')
const card = document.getElementById('rotatecard')
const imageeffectbtn = document.getElementById('imageeffectbtn')
const imgcontainer = document.getElementById('imgcontainer')

let rotated = false
let rounded = true

function rotateCard() {
    console.log(1)
  if (!rotated) {
    card.style.transform = "rotate(40deg)"
    rotated = true
  } else {
    card.style.transform = "rotate(0deg)"
    rotated = false
  }
}

function changeImageEffect() {
  if (rounded) {
    imgcontainer.style.borderRadius = "50%"
    rounded = false
  } else {
    imgcontainer.style.borderRadius = "10px"
    rounded = true
  }
}
rotatebtn.addEventListener('click', rotateCard)
imageeffectbtn.addEventListener('click', changeImageEffect)

// third card 

const img = document.getElementById('effectimg')
const title = document.getElementById('effecttitle')
const text = document.getElementById('effecttext')
const imageandtexteffectbtn = document.getElementById('imageandtexteffect')
const changetextbtn = document.getElementById('changetext')

let effectApplied = false
let textChanged = false

function toggleImageAndTextEffect() {
    if (!effectApplied) {
    img.style.filter = "grayscale(100%)"
    title.style.color = "red"
    effectApplied = true
    } else {
    img.style.filter = "grayscale(0%)"
    title.style.color = "black"
    effectApplied = false
    }
}

function toggleText() {
    if (!textChanged) {
    text.innerText = "lorem 10 eh da m4 48aleh hna"
    textChanged = true
    } else {
    text.innerText = "Stay updated with the latest technological advancements."
    textChanged = false
    }
}
changetextbtn.addEventListener('click', toggleText)
imageandtexteffectbtn.addEventListener('click', toggleImageAndTextEffect)

// 4th card 

const fadeeffectbtn = document.getElementById('fadeeffect')
const fadecard = document.getElementById('fadecard')
let faded = false

function fadeCard() {
  if (!faded) {
    fadecard.style.opacity = "0.6"
    faded = true
  } else {
    fadecard.style.opacity = "1"
    faded = false
  }
}
fadeeffectbtn.addEventListener('click', fadeCard)

const togglecontentbtn = document.getElementById('togglecontent')
const cardcontent = document.getElementById('cardcontent')
let contentVisible = true

function toggleContent() {
  if (contentVisible) {
    cardcontent.style.display = "none"
    contentVisible = false
  } else {
    cardcontent.style.display = "block"
    contentVisible = true
  }
}
togglecontentbtn.addEventListener('click', toggleContent)

// 5th-card 

// Zoom & Rotate Button
const zoomrotatebtn = document.getElementById('zoomrotatebtn')
const zoomrotatecard = document.getElementById('zoomrotatecard')
let rotatedZoomed = false

function zoomAndRotate() {
  if (!rotatedZoomed) {
    zoomrotatecard.style.transform = "scale(1.1) rotate(10deg)"
    rotatedZoomed = true
  } else {
    zoomrotatecard.style.transform = "scale(1) rotate(0deg)"
    rotatedZoomed = false
  }
}
zoomrotatebtn.addEventListener('click', zoomAndRotate)

const plusbtn = document.getElementById('plusbtn')
const pluscard = document.getElementById('pluscard')

function zoomOnly() {
    pluscard.style.transition = "all 0.4s ease";
    pluscard.style.transform = "scale(1.05)"  
    // after 400ms, return to normal
    setTimeout(() => {
      pluscard.style.transform = "scale(1)"
    }, 500)
}
plusbtn.addEventListener('click', zoomOnly)


// 6th card 

const elevateBtn = document.getElementById('elevatebtn');
const changebgBtn = document.getElementById('changebgBtn');
const sixth_card = document.getElementById('sixth_card');
const changedbg = document.getElementById('changedbg')
let elevated = false;

elevateBtn.addEventListener('click', () => {
  if (!elevated) {
    sixth_card.style.transition = "all 0.4s ease";
    sixth_card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    sixth_card.style.transform = "translateY(-10px)";
    elevated = true;
  } else {
    sixth_card.style.boxShadow = "none";
    sixth_card.style.transform = "translateY(0)";
    elevated = false;
  }
});


const colors =["pink" , "purple", 'white']
let colors_index = 0
changebgBtn.addEventListener('click', () => {
    changedbg.style.backgroundColor = colors[colors_index];
    colors_index += 1
    colors_index %= colors.length 
}
);

// 7-th card 

const sevth_card = document.getElementById('sevth_card');
const shakeBtn = document.getElementById('shakeBtn');
const fontBtn = document.getElementById('fontBtn');

shakeBtn.addEventListener('click', () => {
    sevth_card.classList.add("shaking");
    sevth_card.addEventListener("animationend", () => {
      sevth_card.classList.remove("shaking");
    }, { once: true });
});

let toggleFont = false;
fontBtn.addEventListener('click', () => {
  toggleFont = !toggleFont;
  sevth_card.style.fontFamily = toggleFont ? "Courier New, monospace" : "Arial, sans-serif";
});

// 8th-card 
const card8text = document.getElementById("card8text");
const card8 = document.getElementById("card8");
const flipBtn = document.getElementById("flipBtn");
const shadowBtn = document.getElementById("shadowBtn");

flipBtn.addEventListener("click", () => {
  card8.classList.add('flipped');
  setTimeout(()=>{
  card8.classList.remove('flipped');
  } , 1600)
});

shadowBtn.addEventListener("click", () => {
  card8text.classList.toggle("text-shadow");
});

// 9th-card 
const floatBtn = document.getElementById('floatBtn');
const rotateimgBtn = document.getElementById('rotateimgBtn');
const floating = document.getElementById('floating');
const rotated8 = document.getElementById('rotated8');


let greenborder = false
floatBtn.addEventListener('click' , ()=>{
    greenborder = !greenborder
    floating.classList.toggle('void');
    floating.style.border = greenborder ? '3px solid green' : 'none'
})

let isrotated8 = false
rotateimgBtn.addEventListener('click' , ()=>{
    console.log(1)
    isrotated8 = ! isrotated8
    rotated8.style.transition = 'all 0.5s ease'
    rotated8.style.transform = isrotated8 ? 'rotate(45deg)' : 'rotate(0deg)'
})

// 10-th card 

const card10 = document.getElementById("card10");
const shadowBtn10 = document.getElementById("shadowBtn10");
const colorBtn10 = document.getElementById("colorBtn10");

let shadowOn = false;
shadowBtn10.addEventListener("click", () => {
  shadowOn = !shadowOn;
  card10.style.boxShadow = shadowOn ? "inset 0px 0px 10px purple" : "none";
});


const colors10 = ["red", "blue", "green", "orange", "purple"];
let i = 0;
colorBtn10.addEventListener("click", () => {
  colorBtn10.style.backgroundColor = colors10[i % colors10.length];
  colorBtn10.style.color = "white"; 
  i++;
});

// 11-th card 

const card11 = document.getElementById("card11");
const cardImg11 = document.getElementById("cardImg11");
const squeezeBtn = document.getElementById("squeezeBtn");
const blurBtn = document.getElementById("blurBtn");

squeezeBtn.addEventListener("click", () => {
  card11.style.transform = "scale(0.9, 0.8)";
  card11.style.transition = 'all 0.6s ease-in-out'
  setTimeout(() => {
    card11.style.transform = "scale(1, 1)";
  }, 200);
});

let blurred = false;
blurBtn.addEventListener("click", () => {
  blurred = !blurred;
  cardImg11.style.filter = blurred ? "blur(4px)" : "none";
});

// final card 

const card12 = document.getElementById("card12");
const gradientBtn = document.getElementById("gradientBtn");
const starsBtn = document.getElementById("starsBtn");
const stars = document.getElementById('stars');
let gradientOn = false;
gradientBtn.addEventListener("click", () => {
  gradientOn = !gradientOn;
  card12.style.background = gradientOn
    ? "linear-gradient(to right, purple, pink)"
    : "white";
});

// 2- Insert paragraph with stars
starsBtn.addEventListener("click", () => {
    stars.classList.toggle('hiddenstars')
});





