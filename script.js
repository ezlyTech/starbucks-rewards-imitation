// TAB
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks, slider;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks__items");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" line", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " line";

}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();





// Show responsive menu

const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".nav__wrapper");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("activeMenu");
    navMenu.classList.toggle("activeMenu");
}


// Show responsive menuItems
const menuItemsOpener = document.querySelector(".menu-items-btn");
const menuItems = document.querySelector(".menu_items_wrapper");

menuItemsOpener.addEventListener("click", mobileMenuItems);

function mobileMenuItems() {
    // menuItemsOpener.classList.toggle("activeMenuItems");
    // menuItems.classList.toggle("activeMenuItems");
    menuItemsOpener.classList.add('activeMenuItems');
    menuItems.classList.add('activeMenuItems');
}


const menuItemsClose = document.querySelector(".menu-items-close");
menuItemsClose.addEventListener("click", closeItems);

function closeItems() {
    // menuItemsClose.classList.toggle("clicked");
    // menuItems.classList.toggle("clicked");
    menuItemsClose.classList.remove('activeMenuItems');
    menuItems.classList.remove('activeMenuItems');
}