import './style.css';
import Logo from './logo.png';

const renderHomePage = function() {

}

const renderMenuPage = function() {

}

const renderContactPage = function() {

}

const rederWebiste = (function() {
    const content = document.querySelector('#content');
    // Create and append header
    const header = document.createElement('div');
    header.id = 'header';
    const myLogo = new Image()
    myLogo.src = Logo;
    myLogo.id = 'logo';
    header.appendChild(myLogo)
    const buttunsContainer = document.createElement('div');
    buttunsContainer.id = 'buttons'
    const homeButton = document.createElement('button');
    homeButton.id = 'home-button';
    homeButton.textContent = 'Home';
    buttunsContainer.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.id = 'menu-button';
    menuButton.textContent = 'Menu';
    buttunsContainer.appendChild(menuButton);
    const contactButton = document.createElement('button');
    contactButton.id = 'contact-button';
    contactButton.textContent = 'Contact';
    buttunsContainer.appendChild(contactButton);
    header.appendChild(buttunsContainer);
    content.appendChild(header);
    // Create and append tab container
    const tabContainer = document.createElement('div');
    tabContainer.id = 'tab-container';
    content.appendChild(tabContainer);
    // Create and append footer
    const footer = document.createElement('div');
    footer.id = 'footer';
    content.appendChild(footer);

})();