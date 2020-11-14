//var nav =  document.querySelector("header nav");
//var bar = document.getElementById("bar");

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.className="sticky"
  } 
    if(window.scrollY == 0){
        
        navbar.className= ""
    }
    
}

var isSidebarOpen = false;
var side_bar = document.querySelector("header nav");
var side_bar_class_name = side_bar.className;
var toggle_bar = document.querySelector("#toggle-sidebar");
var toggle_bar_class = toggle_bar.className;

function toggleSideBar(){

    if(isSidebarOpen == false){

        side_bar.className += " open";
        toggle_bar.className += " open"
        isSidebarOpen = true;

    }
    else{
side_bar.className = side_bar_class_name;
toggle_bar.className = toggle_bar_class;
isSidebarOpen = false
    }



}