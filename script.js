// TAB
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks, slider;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" line", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " line";

}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



// Show sidebar

const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".nav__wrapper");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("activeMenu");
    navMenu.classList.toggle("activeMenu");
}