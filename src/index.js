import './style.css';
import Logo from './logo.png';

const renderHomeTab = function() {
    const tabContainer = document.querySelector('#tab-container');
    tabContainer.childNodes.forEach(node => node.remove());
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'My good Restaurant';
    tabContainer.appendChild(restaurantName);
    const restaurantInformation = document.createElement('p');
    restaurantInformation.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
    Praesent accumsan blandit ex in venenatis. Curabitur semper ultrices aliquam. In suscipit<br>\
    massa ut nibh mattis consectetur. Sed rhoncus finibus diam, eu posuere erat feugiat in.<br>\
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis<br>\
    egestas. In aliquet massa at felis laoreet lacinia id et felis. Nulla tristique nunc<br>\
    eget cursus tristique. Pellentesque semper, ligula in porttitor euismod, arcu quam<br>\
    vestibulum enim, et commodo mauris nunc sit amet diam. Nulla facilisis cursus tellus<br>\
    at ornare. Integer commodo metus eget lacinia congue. Suspendisse non sem quis<br>\
    quam tincidunt euismod. Aenean ex arcu, ornare et dapibus in, vehicula at orci.';
    tabContainer.appendChild(restaurantInformation);
    
}
const renderMenuTab = function() {

}

const renderContactTab = function() {

}

const renderWebiste = (function() {
    const content = document.querySelector('#content');
    // Create and append header
    const header = document.createElement('div');
    header.id = 'header';
    const myLogo = new Image()
    myLogo.src = Logo;
    myLogo.id = 'logo';
    header.appendChild(myLogo)
    const linksContainer = document.createElement('div');
    linksContainer.id = 'links'
    const homeLink = document.createElement('a');
    homeLink.id = 'home-link';
    homeLink.textContent = 'Home';
    linksContainer.appendChild(homeLink);
    const menuLink = document.createElement('a');
    menuLink.id = 'menu-link';
    menuLink.textContent = 'Menu';
    linksContainer.appendChild(menuLink);
    const contactLink = document.createElement('a');
    contactLink.id = 'contact-link';
    contactLink.textContent = 'Contact';
    linksContainer.appendChild(contactLink);
    header.appendChild(linksContainer);
    content.appendChild(header);
    // Create and append tab container
    const tabContainer = document.createElement('div');
    tabContainer.id = 'tab-container';
    content.appendChild(tabContainer);
    // Create and append footer
    const footer = document.createElement('div');
    footer.id = 'footer';
    content.appendChild(footer);

    renderHomeTab();
})();