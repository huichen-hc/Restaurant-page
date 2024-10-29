import "./styles/styles.css";
import "./styles/reset.css";
import homePageLoad from "./pages/home.js";
import menuPage from "./pages/menu.js";
import AboutUsPage from "./pages/about-us.js";

homePageLoad();

const content = document.querySelector("#content") 
const navHomeButton = document.querySelector("#nav-home");
const navMenuButton = document.querySelector("#nav-menu");
const navAboutButton = document.querySelector("#nav-about");

function loadPage(pagebutton){
    content.innerHTML = "";
    pagebutton();
}

navHomeButton.addEventListener('click',() => loadPage(homePageLoad));
navMenuButton.addEventListener('click',() => loadPage(menuPage))
navAboutButton.addEventListener('click', () => loadPage(AboutUsPage))
