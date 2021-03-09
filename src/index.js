import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';


function component() {
    const element = document.createElement('div');
    element.innerHTML = createNavigation();
    element.innerHTML = homePage();
    
    return element;
}
document.body.appendChild(component());


function createNavigation() {
    
    

    const nav = document.querySelector("#navigation");

    const heading = document.createElement("object");
    heading.classList.add("logo");
    heading.setAttribute("type", "image/svg+xml");
    heading.setAttribute("data", "/dist/images/logo.svg");
    nav.appendChild(heading);

    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tabContainer");
    nav.appendChild(tabContainer);

    let currentTab = "home";


    const home = document.createElement("div");
    home.classList.add("tab", "tabActive");
    home.textContent = "Home";
    tabContainer.appendChild(home);

    const menu = document.createElement("div");
    menu.classList.add("tab", "tabBack");
    menu.textContent = "Menu";
    tabContainer.appendChild(menu);
    
    const contact = document.createElement("div");
    contact.classList.add("tab", "tabBack");
    contact.textContent = "Contact";
    tabContainer.appendChild(contact);

    const blank = document.createElement("div");
    blank.classList.add("tabBlank");
    tabContainer.appendChild(blank);

    home.addEventListener("click", () => {
        if (currentTab != "home") {
            currentTab = "home";
            clearContent();
            home.classList.remove("tabBack");
            home.classList.add("tabActive");
            menu.classList.remove("tabActive");
            menu.classList.add("tabBack");
            contact.classList.remove("tabActive");
            contact.classList.add("tabBack");
            homePage();
            footer();
        }   
    })

    menu.addEventListener("click", () => {
        if (currentTab != "menu") {
            currentTab = "menu";
            clearContent();
            home.classList.remove("tabActive");
            home.classList.add("tabBack");
            menu.classList.remove("tabBack");
            menu.classList.add("tabActive");
            contact.classList.remove("tabActive");
            contact.classList.add("tabBack");
            menuPage();
            footer();
        }   
    })

    contact.addEventListener("click", () => {
        if (currentTab != "contact") {
            currentTab = "contact";
            clearContent();
            home.classList.remove("tabActive");
            home.classList.add("tabBack");
            menu.classList.remove("tabActive");
            menu.classList.add("tabBack");
            contact.classList.remove("tabBack");
            contact.classList.add("tabActive");
            contactPage();
            footer();
        }   
    })

    return nav;

}

function clearContent () {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}


function footer () {
    
}