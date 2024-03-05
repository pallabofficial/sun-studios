
// --------------------------------------------disclaimer message---------------------------------------------------

const mainBody = document.querySelector("#main")
const disclaimerBox = document.querySelector("#disclaimer-box");
const disclaimerOverlay = document.querySelector("#disclaimer-overlay");

const disclaimerContinueBtn = document.querySelector("#disclaimer-continue-btn");
const disclaimerExitBtn = document.querySelector("#disclaimer-exit-btn");

function hideDisclaimer() {
  disclaimerBox.style.top = "-500vh";
  disclaimerOverlay.style.top = "-500vh";
  mainBody.style.display = "block";
}

function showDisclaimerMessage() {
  disclaimerBox.style.top = "5vh";
  disclaimerOverlay.style.top = "0";
  mainBody.style.display = "none";
}


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
  // close window when the button is clicked
  if (window.close) {
    window.close();
  } else {
    // Display a message if the browser does not support window.close()
    alert("Sorry, your browser does not support closing the window programmatically. Try manually.");
  }
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
  
  mainBody.style.background = 'linear-gradient(to top right,#000000,#2d2c2c, #000000)';
  mainBody.style.color = "white";
  navbar.style.background = 'linear-gradient(to top right, #000000,#363636, #000000)';
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
  mainBody.style.background = "none";
  mainBody.style.backgroundColor = "#EFEAE3";
  mainBody.style.color = "black";
  navbar.style.background = 'none';
  navbar.style.backgroundColor = "#EFEAE3";
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
const screenModeBtn = document.querySelector("#screen-mode-div");
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
          navItems.style.top = "15vh";
          darkScreen.style.top = "15vh";

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
            navItems.style.top = "-100%";
            darkScreen.style.top = "-100%";
            
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

