
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