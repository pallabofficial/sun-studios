
const menu = document.querySelector("#nav-menu-div");
const navbar = document.querySelector("nav");
const navItems = document.querySelector("#expand-nav-menu")
const darkMode = document.querySelector("#dark-mode")
let flag = false;
menu.addEventListener("click", (event)=>{
    if (flag===false){
        navItems.style.top = "15vh";
        darkMode.style.top="15vh";
        flag=true;
    }
    else{
        navItems.style.top = "-100%";
        darkMode.style.top="-100%";
        flag=false;
    }
    
})