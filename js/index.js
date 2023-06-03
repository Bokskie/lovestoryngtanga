var sidebarBtn = document.querySelector(".sidebarBtn");
var sidebar = document.querySelector("aside");

sidebarBtn.onclick = function(){
    sidebar.classList.toggle("active");
}