import './style.css';

const renderHomePage = function() {

}

const renderMenuPage = function() {

}

const renderContactPage = function() {

}

const rederWebiste = (function() {
    const header = document.createElement('div');
    header.id = 'header';
    const homeButton = document.createElement('button');
    homeButton.id = 'home-button';
    homeButton.textContent = 'Home';
    header.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.id = 'menu-button';
    menuButton.textContent = 'Menu';
    header.appendChild(menuButton);
    const contactButton = document.createElement('button');
    contactButton.id = 'contact-button';
    contactButton.textContent = 'Contact';
    header.appendChild(contactButton);
    document.querySelector('#content').appendChild(header);
})();