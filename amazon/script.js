// sidebar_container_navigation
const sidebarNavigationEl = document.getElementById("sidebar_container_navigation");
const sidebarOpenNavigationEl = document.getElementById("open_nav_sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar_navigation_close");

console.log(sidebarNavigationEl);

sidebarOpenNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar_show");
})
sidebarCloseNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar_show");
})