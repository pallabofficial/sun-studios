const body = document.querySelector("body");
const mainBody = document.querySelector("#main") //main content of the website
// -------------------------------------------------------alert box--------------------------------------

let screenWidth= window.innerWidth;
const alertBox = document.querySelector("#alert-box");
const alertOverlay = document.querySelector("#alert-box-overlay");
const closeAlertBtn = document.querySelector("#alert-btn");
const alertMsg = document.querySelector("#alert-msg");


function displayAlertBox(notification){
    
    if(screenWidth>769 && window.innerHeight<=screenWidth){
        alertBox.style.top = "2vh";        
    }
    else{
        alertBox.style.top = "50vh";        
    }    
    alertOverlay.style.top = 0;
    alertMsg.innerText = notification;
    body.style.overflow = "hidden"
}


closeAlertBtn.addEventListener("click",(event)=> {
    alertBox.style.top="-150vh";
    alertOverlay.style.top = "-150vh";
    body.style.overflow = ""
})


// -------------------------------smooth scrolling while navigating through anchor elements-------------------------------

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var targetId = this.getAttribute("href").substring(1);
    var targetSection = $("#" + targetId);

    // Adjust the duration in milliseconds (e.g., 800 for 0.8 seconds)
    $("html, body").animate(
      {
        scrollTop: targetSection.offset().top,
      },
      500
    );
  });
});

// --------------------------------------------disclaimer message---------------------------------------------------


const disclaimerBox = document.querySelector("#disclaimer-box");
const disclaimerOverlay = document.querySelector("#disclaimer-overlay");

const disclaimerContinueBtn = document.querySelector("#disclaimer-continue-btn");
const disclaimerExitBtn = document.querySelector("#disclaimer-exit-btn");

function hideDisclaimer() {
  disclaimerBox.style.top = "-100vh";
  disclaimerOverlay.style.top = "-100vh";
  mainBody.style.display = "block";
  
}

function showDisclaimerMessage() {
  disclaimerBox.style.top = "5vh";
  disclaimerOverlay.style.top = "0";
  mainBody.style.display = "none";

}
// showDisclaimerMessage();       //check and test the disclaimer section

// Check if the disclaimerSeen cookie is present
if (document.cookie.indexOf('disclaimerSeen=true') === -1) {
  // If not present, show the disclaimer and set the cookie
  showDisclaimerMessage();

  var expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);

  document.cookie = 'disclaimerSeen=true; expires=' + expirationDate.toUTCString();
} else {
  // If the cookie is present, hide the disclaimer
  hideDisclaimer();
}

disclaimerContinueBtn.addEventListener('click', (event) => {
  // When the continue button is clicked, hide the disclaimer
  hideDisclaimer();
});

disclaimerExitBtn.addEventListener('click', (event) => {
    let msg = "Your browser security is not allowing to exit the website, kindly close the tab manually. Sorry for the inconvenience!!!";
    displayAlertBox(msg);
    window.close();  //if browser allows to close the window, it will closed without the above alert message.
});





// ----------------------------------------screen mode (white/dark)-------------------------------------------


let screenMode; //screen mode(white/dark)
let flag; // navbar menu icon (on click, it will expand the nav items)

const menuIconWhiteScreen = document.querySelector("#menu-icon-whiteScreen");
const menuIconDarkScreen = document.querySelector("#menu-icon-darkScreen");
const crossIconWhiteScreen = document.querySelector("#cross-icon-whiteScreen");
const crossIconDarkScreen = document.querySelector("#cross-icon-darkScreen");

const navbar = document.querySelector("#navbar");
const navMenu = document.querySelector("#nav-menu-div");
const expandNavMenu = document.querySelector("#expand-nav-menu");
const logoWhiteScreen = document.querySelector("#logo-white-screen");
const logoDarkScreen = document.querySelector("#logo-dark-screen");
const whiteModeClientLogo = document.querySelectorAll(".client-logo-white");
const darkModeClientLogo = document.querySelectorAll(".client-logo-dark");
const featuredProjectCategory = document.querySelectorAll(".project-category");
const rightArrowIconWhiteScreen = document.querySelector("#right-arrow-icon-whiteScreen");
const rightArrowIconDarkScreen = document.querySelector("#right-arrow-icon-darkScreen");
const moreProjectsBtn = document.querySelector("#more-projects-btn");

function enableDarkMode(){
  if(screenWidth>768 && window.innerHeight<=768){
    navbar.style.backgroundColor = 'transparent';
  }
  else{
    navbar.style.background = 'linear-gradient(to top right,#000000,#2d2c2c, #000000)';
  }
  mainBody.style.background = 'linear-gradient(to top right,#000000,#2d2c2c, #000000)';
  mainBody.style.color = "white";
  
  navbar.style.color = "white";
  expandNavMenu.style.background = 'linear-gradient(to top right, #313030, #000000, #000000)';
  expandNavMenu.style.color = "white";
  navMenu.style.borderColor = "white";
  logoWhiteScreen.style.opacity = 0;
  logoDarkScreen.style.opacity = 1;
  whiteModeClientLogo.forEach((element)=>{
    element.style.opacity = 0;
  });
  darkModeClientLogo.forEach((element)=>{
    element.style.opacity = 1;
  });
  featuredProjectCategory.forEach((element)=>{
    element.style.color = "rgb(159, 153, 153)";
  });

  rightArrowIconWhiteScreen.style.opacity = 0;
  rightArrowIconDarkScreen.style.opacity = 1;
  moreProjectsBtn.style.borderColor = "white";


  if(flag===false){
    menuIconWhiteScreen.style.opacity = 0;
    crossIconWhiteScreen.style.opacity = 0;
    menuIconDarkScreen.style.opacity = 1;
    crossIconDarkScreen.style.opacity = 0;

    menuIconWhiteScreen.style.transform = "scale(0)";
    crossIconWhiteScreen.style.transform = "scale(0)";          
    menuIconDarkScreen.style.transform = "scale(1)";
    crossIconDarkScreen.style.transform = "scale(0)";
  }
  else{
    menuIconWhiteScreen.style.opacity = 0;
    crossIconWhiteScreen.style.opacity = 0;
    menuIconDarkScreen.style.opacity = 0;
    crossIconDarkScreen.style.opacity = 1;

    menuIconWhiteScreen.style.transform = "scale(0)";
    crossIconWhiteScreen.style.transform = "scale(0)";          
    menuIconDarkScreen.style.transform = "scale(0)";
    crossIconDarkScreen.style.transform = "scale(1)";
  }
 
}
function enableWhiteMode(){
  if(screenWidth>768 && window.innerHeight<=768){
    navbar.style.backgroundColor = 'transparent';
  }
  else{
    navbar.style.background = 'none';
    navbar.style.backgroundColor = "#EFEAE3";
  }
  mainBody.style.background = "none";
  mainBody.style.backgroundColor = "#EFEAE3";
  mainBody.style.color = "black";
  
  
  navbar.style.color = "black";
  expandNavMenu.style.background = "none";
  expandNavMenu.style.backgroundColor = "#EFEAE3";
  expandNavMenu.style.color = "black";
  navMenu.style.borderColor = "black";
  logoWhiteScreen.style.opacity = 1;
  logoDarkScreen.style.opacity = 0;
  whiteModeClientLogo.forEach((element)=>{
    element.style.opacity = 1;
  });
  darkModeClientLogo.forEach((element)=>{
    element.style.opacity = 0;
  });
  featuredProjectCategory.forEach((element)=>{
    element.style.color = "rgba(0, 0, 0, 0.347)";
  });
  rightArrowIconWhiteScreen.style.opacity = 1;
  rightArrowIconDarkScreen.style.opacity = 0;
  moreProjectsBtn.style.borderColor = "black";

  if(flag===false){
    menuIconWhiteScreen.style.opacity = 1;
    crossIconWhiteScreen.style.opacity = 0;
    menuIconDarkScreen.style.opacity = 0;
    crossIconDarkScreen.style.opacity = 0;

    menuIconWhiteScreen.style.transform = "scale(1)";
    crossIconWhiteScreen.style.transform = "scale(0)";          
    menuIconDarkScreen.style.transform = "scale(0)";
    crossIconDarkScreen.style.transform = "scale(0)";
  }
  else{
    menuIconWhiteScreen.style.opacity = 0;
    crossIconWhiteScreen.style.opacity = 1;
    menuIconDarkScreen.style.opacity = 0;
    crossIconDarkScreen.style.opacity = 0;

    menuIconWhiteScreen.style.transform = "scale(0)";
    crossIconWhiteScreen.style.transform = "scale(1)";          
    menuIconDarkScreen.style.transform = "scale(0)";
    crossIconDarkScreen.style.transform = "scale(0)";
  }
}


screenMode = "white";
const screenModeBtn = document.querySelector("#screen-mode-wrapper");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");

screenModeBtn.addEventListener("click", (event)=>{
  if(screenMode==="white"){
    sunIcon.style.opacity = 0;
    moonIcon.style.opacity = 1;
    enableDarkMode();
    screenMode = "dark";
  }
  else{
    sunIcon.style.opacity = 1;
    moonIcon.style.opacity = 0;
    enableWhiteMode();
    screenMode = "white";
  }
})



// ------------------------------------------------------navbar nav items------------------------------------------

function expandNavItems(){
    const menu = document.querySelector("#nav-menu-div");
    const navbar = document.querySelector("nav");
    const navItems = document.querySelector("#expand-nav-menu");
    const darkScreen = document.querySelector("#dark-screen");  

    flag = false;  //navmenu button is not clicked
    menu.addEventListener("click", (event)=>{
        if (flag===false){
          navItems.style.top = "20vh";
          darkScreen.style.top = "20vh";

          if(screenMode==="white"){
            menuIconWhiteScreen.style.opacity = 0;
            crossIconWhiteScreen.style.opacity = 1;
            menuIconDarkScreen.style.opacity = 0;
            crossIconDarkScreen.style.opacity = 0;

            menuIconWhiteScreen.style.transform = "scale(0)";
            crossIconWhiteScreen.style.transform = "scale(1)";          
            menuIconDarkScreen.style.transform = "scale(0)";
            crossIconDarkScreen.style.transform = "scale(0)";
          }
          else{
            menuIconWhiteScreen.style.opacity = 0;
            crossIconWhiteScreen.style.opacity = 0;
            menuIconDarkScreen.style.opacity = 0;
            crossIconDarkScreen.style.opacity = 1;

            menuIconWhiteScreen.style.transform = "scale(0)";
            crossIconWhiteScreen.style.transform = "scale(0)";          
            menuIconDarkScreen.style.transform = "scale(0)";
            crossIconDarkScreen.style.transform = "scale(1)";
          }
          


          flag=true;   //navmenu button is  clicked
          darkScreen.style.transitionDuration = "1s"
        }
        else{
            navItems.style.top = "-200%";
            darkScreen.style.top = "-200%";
            
            if(screenMode==="white"){
              menuIconWhiteScreen.style.opacity = 1;
              crossIconWhiteScreen.style.opacity = 0;
              menuIconDarkScreen.style.opacity = 0;
              crossIconDarkScreen.style.opacity = 0;
  
              menuIconWhiteScreen.style.transform = "scale(1)";
              crossIconWhiteScreen.style.transform = "scale(0)";          
              menuIconDarkScreen.style.transform = "scale(0)";
              crossIconDarkScreen.style.transform = "scale(0)";
            }
            else{
              menuIconWhiteScreen.style.opacity = 0;
              crossIconWhiteScreen.style.opacity = 0;
              menuIconDarkScreen.style.opacity = 1;
              crossIconDarkScreen.style.opacity = 0;
  
              menuIconWhiteScreen.style.transform = "scale(0)";
              crossIconWhiteScreen.style.transform = "scale(0)";          
              menuIconDarkScreen.style.transform = "scale(1)";
              crossIconDarkScreen.style.transform = "scale(0)";
            }

            flag=false;
            darkScreen.style.transitionDuration = "0.2s"
        }
        
    })
}
expandNavItems();

// ---------------------------------------------fixed playback speed of all the videos------------------------------------

const bannerVideo = document.querySelector("#banner-video");
bannerVideo.playbackRate = 0.8;

const aboutVideo = document.querySelector("#about-video");
aboutVideo.playbackRate = 0.5;


// ----------------------------------------------------- services-----------------------------------------------

function selectServices(){
    const designSection = document.querySelector("#design");
    const projectSection = document.querySelector("#project");
    const executionSection = document.querySelector("#execution");

    const bar1 = document.querySelector("#bar-1");
    const bar2 = document.querySelector("#bar-2");
    const bar3 = document.querySelector("#bar-3");

    const serviceDetails1 = document.querySelector("#services-details-1");
    const serviceDetails2 = document.querySelector("#services-details-2");
    const serviceDetails3 = document.querySelector("#services-details-3");

    const serviceImg1 = document.querySelector("#services-img-1");
    const serviceImg2 = document.querySelector("#services-img-2");
    const serviceImg3 = document.querySelector("#services-img-3");

    // Add a class for active state
    const setActive = (section, bar, details, img) => {
        section.style.color = "white";    

        bar.style.marginLeft = "-1vw";
        bar.style.backgroundColor = "#FE330A";

        details.style.visibility = "visible";
        img.style.visibility = "visible";
    };

    // Reset styles for all sections
    const resetStyles = () => {
        [designSection, projectSection, executionSection].forEach(section => {
            section.style.color = "#504A45";
        });

        [bar1, bar2, bar3].forEach(bar => {
            bar.style.marginLeft = "0vw";
            bar.style.backgroundColor = "#504A45";
        });

        [serviceDetails1, serviceDetails2, serviceDetails3, serviceImg1, serviceImg2, serviceImg3].forEach(element => {
            element.style.visibility = "hidden";
        });
    };

    designSection.addEventListener('click', (event) => {
        console.log("section1");
        resetStyles();
        setActive(designSection, bar1, serviceDetails1, serviceImg1);
    });

    projectSection.addEventListener('click', (event) => {
        console.log("section2");
        resetStyles();
        setActive(projectSection, bar2, serviceDetails2, serviceImg2);
    });

    executionSection.addEventListener('click', (event) => {
        console.log("section3");
        resetStyles();
        setActive(executionSection, bar3, serviceDetails3, serviceImg3);
    });

}
selectServices();

// -----------------------------------------more projects button functionality-------------------

moreProjectsBtn.addEventListener("click", ()=>{
 let message = "This button is designed just to make the website look realistic.The projects mentioned over here are fictional and not real entity."
 displayAlertBox(message)
})

