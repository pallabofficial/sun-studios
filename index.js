




const menu = document.querySelector("#nav-menu-div");
const navbar = document.querySelector("nav");
const navItems = document.querySelector("#expand-nav-menu")
const darkScreen = document.querySelector("#dark-screen")
let flag = false;
menu.addEventListener("click", (event)=>{
    if (flag===false){
        navItems.style.top = "15vh";
        darkScreen.style.top = "15vh";
        flag=true;
        darkScreen.style.transitionDuration = "1s"
    }
    else{
        navItems.style.top = "-100%";
        darkScreen.style.top = "-100%";
        flag=false;
        darkScreen.style.transitionDuration = "0.2s"
    }
    
})

// ----------------------------------------------------fixed speed of all the videos------------------------------------

const bannerVideo = document.querySelector("#banner-video");
bannerVideo.playbackRate = 0.5;

const aboutVideo = document.querySelector("#about-video");
aboutVideo.playbackRate = 0.5;


// --------------------------------------------------------services-----------------------------------------------

const designSection = document.querySelector("#design");
const projectSection = document.querySelector("#project");
const executionSection = document.querySelector("#execution");


const bar1 = document.querySelector("#bar-1");
const bar2 = document.querySelector("#bar-2");
const bar3 = document.querySelector("#bar-3");

// const designTitle = document.querySelector("#design-title");
// const projectTitle = document.querySelector("#project-title");
// const executionTitle = document.querySelector("#execution-title");

const serviceDetails1 = document.querySelector("#services-details-1");
const serviceDetails2 = document.querySelector("#services-details-2");
const serviceDetails3 = document.querySelector("#services-details-3");

const serviceImg1 = document.querySelector("#services-img-1");
const serviceImg2 = document.querySelector("#services-img-2");
const serviceImg3 = document.querySelector("#services-img-3");

// Add a class for active state
const setActive = (section, bar, details, img) => {
    section.style.color = "white";
    // title.style.color = "#504A45";

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





















// designSection.addEventListener('click', (event)=>{
//     designTitle.style.color = "white";
//     projectTitle.style.color = "#504A45";
//     executionTitle.style.color = "#504A45";

//     bar1.style.marginLeft = "-1vw";
//     bar1.style.backgroundColor = "#FE330A";

//     bar2.style.marginLeft = "0vw";
//     bar2.style.backgroundColor = "#504A45";

//     bar3.style.marginLeft = "0vw";
//     bar3.style.backgroundColor = "#504A45";  
    
//     serviceDetails1.style.visibility = "visible";
//     serviceDetails2.style.visibility = "hidden";
//     serviceDetails3.style.visibility = "hidden";

//     serviceImg1.style.visibility = "visible";
//     serviceImg2.style.visibility = "hidden";
//     serviceImg3.style.visibility = "hidden";

// })

// projectSection.addEventListener('click', (event)=>{
//     designTitle.style.color = "#504A45";
//     projectTitle.style.color = "white";
//     executionTitle.style.color = "#504A45";

//     bar2.style.marginLeft = "-1vw";
//     bar2.style.backgroundColor = "#FE330A";

//     bar1.style.marginLeft = "0vw";
//     bar1.style.backgroundColor = "#504A45";

    

//     bar3.style.marginLeft = "0vw";
//     bar3.style.backgroundColor = "#504A45";  

//     serviceDetails1.style.visibility = "hidden";
//     serviceDetails2.style.visibility = "visible";
//     serviceDetails3.style.visibility = "hidden";

//     serviceImg1.style.visibility = "hidden";
//     serviceImg2.style.visibility = "visible";
//     serviceImg3.style.visibility = "hidden";

// })

// executionSection.addEventListener('click', (event)=>{
//     designTitle.style.color = "white";
//     projectTitle.style.color = "#504A45";
//     executionTitle.style.color = "#504A45";

//     bar1.style.marginLeft = "-1vw";
//     bar2.style.marginLeft = "0vw";
//     bar3.style.marginLeft = "0vw";

//     bar1.style.backgroundColor = "yellow";
//     bar2.style.backgroundColor = "#504A45";
//     bar3.style.backgroundColor = "#504A45";

//     serviceDetails1.style.visibility = "visible";
//     serviceDetails2.style.visibility = "hidden";
//     serviceDetails3.style.visibility = "hidden";

//     serviceImg1.style.visibility = "visible";
//     serviceImg2.style.visibility = "hidden";
//     serviceImg3.style.visibility = "hidden";

// })