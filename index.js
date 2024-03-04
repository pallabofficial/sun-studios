


// ----------------------------------------------------------screen mode (white/dark)--------------------------
const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const navMenu = document.querySelector("#nav-menu-div");
const expandNavMenu = document.querySelector("#expand-nav-menu");
const logoWhiteScreen = document.querySelector("#logo-white-screen");
const logoDarkScreen = document.querySelector("#logo-dark-screen");
const whiteModeClientLogo = document.querySelectorAll(".client-logo-white");
const darkModeClientLogo = document.querySelectorAll(".client-logo-dark");
const featuredProjectCategory = document.querySelectorAll(".project-category");

function enableDarkMode(){
  
  body.style.background = 'linear-gradient(to top right,#000000,#2d2c2c, #000000)';
  body.style.color = "white";
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
 
}
function enableWhiteMode(){
  body.style.background = "none";
  body.style.backgroundColor = "#EFEAE3";
  body.style.color = "black";
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
}


let screenMode = "white";
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
    const menuIcon = document.querySelector("#menu-icon");
    const crossIcon = document.querySelector("#cross-icon");

    let flag = false;
    menu.addEventListener("click", (event)=>{
        if (flag===false){
            navItems.style.top = "15vh";
            darkScreen.style.top = "15vh";
            menuIcon.style.opacity = 0;
            crossIcon.style.opacity = 1;
            menuIcon.style.transform = "scale(0)";
            crossIcon.style.transform = "scale(1)";
            flag=true;
            darkScreen.style.transitionDuration = "1s"
        }
        else{
            navItems.style.top = "-100%";
            darkScreen.style.top = "-100%";
            menuIcon.style.opacity = 1;
            crossIcon.style.opacity = 0;
            menuIcon.style.transform = "scale(1)";
            crossIcon.style.transform = "scale(0)";
            flag=false;
            darkScreen.style.transitionDuration = "0.2s"
        }
        
    })
}
expandNavItems();

// ---------------------------------------------fixed speed of all the videos------------------------------------

const bannerVideo = document.querySelector("#banner-video");
bannerVideo.playbackRate = 0.8;

const aboutVideo = document.querySelector("#about-video");
aboutVideo.playbackRate = 0.5;


// -------------------------------------------------------services-----------------------------------------------

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

