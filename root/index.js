
const menu = document.querySelector("#nav-menu-div");
const navbar = document.querySelector("nav");
const navItems = document.querySelector("#expand-nav-menu")
let flag = false;
menu.addEventListener("click", (event)=>{
    if (flag===false){
        navItems.style.top = "15vh";
        flag=true;
    }
    else{
        navItems.style.top = "-100%";
        flag=false;
    }
    
})