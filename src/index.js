import './style.css';
import Logo from './logo.png';
import Burger from './burger.png'

const clearTab = function() {
    const tabContainer = document.querySelector('#tab-container');
    Array.from(tabContainer.childNodes).forEach(node => node.remove());
}

const renderHomeTab = function() {
    clearTab();
    const tabContainer = document.querySelector('#tab-container');
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
    clearTab();
    const items = [
        {
            title: 'burger',
            imageUrl: Burger,
            price: 5,
            descreption: 'bun with patty in it'
        },
    ];
    
    const createMenuItem = function(item){
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        itemTitle.className = 'item-title';
        itemCard.appendChild(itemTitle);
        const itemImage = new Image();
        itemImage.src = item.imageUrl;
        itemImage.className = 'item-img';
        itemCard.appendChild(itemImage)
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `${item.price}`;
        itemPrice.className = 'item-price';
        itemCard.appendChild(itemPrice);
        const itemDescreption = document.createElement('p');
        itemDescreption.textContent = item.descreption;
        itemDescreption.className = 'item-descreption';
        itemCard.appendChild(itemDescreption);
        console.log(itemCard);
        return itemCard;
    }
    const itemDivs = items.map(createMenuItem);
    itemDivs.forEach(div => {
        const tabContainer = document.querySelector('#tab-container');
        tabContainer.appendChild(div);
    });
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

const menuLink = document.querySelector('#menu-link');
menuLink.addEventListener('click', renderMenuTab);