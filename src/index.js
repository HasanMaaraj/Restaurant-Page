import './style.css';
import Logo from './images/logo.png';
import Burger from './images/burger.png'
import Pizza from './images/pizza.png'
import Pasta from './images/pasta.png'
import Steak from './images/steak.png'
import github from './images/github.svg'


const markOnDisplay = function(tabId) {
    const links = document.querySelectorAll('#links a');
    links.forEach(link => {
        link.classList.remove('on-display')
    });
    document.querySelector(tabId).classList += 'on-display';
}

const clearTab = function() {
    const tabContainer = document.querySelector('#tab-container');
    Array.from(tabContainer.childNodes).forEach(node => node.remove());
}

const renderHomeTab = function() {
    clearTab();
    const tabContainer = document.querySelector('#tab-container');
    const homeCardContainer = document.createElement('div');
    homeCardContainer.className = 'card-container';
    const homeCard = document.createElement('div');
    homeCard.className = 'home-card';
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'My good Restaurant';
    homeCard.appendChild(restaurantName);
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
    homeCard.appendChild(restaurantInformation);
    homeCardContainer.appendChild(homeCard);
    tabContainer.appendChild(homeCardContainer);
    markOnDisplay('#home-link');
    
}

const renderMenuTab = function() {
    clearTab();
    const items = [
        {
            title: 'Burger',
            imageUrl: Burger,
            price: 5,
            descreption: 'bun with patty in it'
        },
        {
            title: 'Pizza',
            imageUrl: Pizza,
            price: 10,
            descreption: 'Pepperoni pizza'
        },
        {
            title: 'Pasta',
            imageUrl: Pasta,
            price: 12,
            descreption: 'Italian cuisine Pasta Organic'
        },
        {
            title: 'Steak',
            imageUrl: Steak,
            price: 30,
            descreption: 'Rib eye steak Barbecue Roast beef Sirloin steak Short ribs'
        },
    ];
    
    const createMenuItem = function(item){
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        const itemInformation = document.createElement('div');
        itemInformation.className = 'item-info';
        const itemImage = new Image();
        itemImage.className = 'item-img';
        itemImage.src = item.imageUrl;
        itemCard.appendChild(itemImage)

        const itemHeader = document.createElement('div');
        itemHeader.className = 'item-header';

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        itemTitle.className = 'item-title';
        itemHeader.appendChild(itemTitle);
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `${item.price}`;
        itemPrice.className = 'item-price';
        itemHeader.appendChild(itemPrice);

        itemInformation.appendChild(itemHeader);
        
        const itemDescreption = document.createElement('p');
        itemDescreption.textContent = item.descreption;
        itemDescreption.className = 'item-descreption';
        itemInformation.appendChild(itemDescreption);
        
        itemCard.appendChild(itemInformation);

        return itemCard;
    }
    
    const menu = document.createElement('div');
    menu.className = 'menu';
    const itemDivs = items.map(createMenuItem);
    itemDivs.forEach(div => {
        menu.appendChild(div);
    });
    document.querySelector('#tab-container').appendChild(menu);
    markOnDisplay('#menu-link');
}

const renderContactTab = function() {
    clearTab();
    const contactCardContainer = document.createElement('div');
    contactCardContainer.className = 'card-container';
    const contactCard = document.createElement('div');
    contactCard.className = 'contact-card';
    const contactInformation = document.createElement('div');
    contactInformation.className = 'contact-information';
    const pageHeader = document.createElement('h1');
    pageHeader.className = 'contact-header';
    pageHeader.textContent = 'Contacts';
    contactInformation.appendChild(pageHeader);
    const email = document.createElement('p');
    email.textContent = 'e-mail: myGoodReastaurant@example.com';
    contactInformation.appendChild(email);
    const phoneNumber = document.createElement('p');
    phoneNumber.className = 'Phone-number';
    phoneNumber.textContent = 'Phone: +123 9876543210';
    contactInformation.appendChild(phoneNumber);
    contactCard.appendChild(contactInformation);
    const restaurantLocation = document.createElement('iframe');
    restaurantLocation.src = 'https://maps.google.com/maps?q=26.140420759948206, 50.5784118470855&t=&z=10&ie=UTF8&iwloc=&output=embed';
    contactCard.appendChild(restaurantLocation)
    contactCardContainer.appendChild(contactCard);
    document.querySelector('#tab-container').appendChild(contactCardContainer)
    markOnDisplay('#contact-link');
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
    const user = document.createElement('p')
    user.innerHTML = 'A website by <a href="https://github.com/HasanMaaraj">Hasan Maaraj</a>';
    user.className = 'user';
    const githubIcon = new Image();
    githubIcon.src = github;
    githubIcon.className = 'github-icon';
    footer.appendChild(user);
    footer.appendChild(githubIcon);
    content.appendChild(footer);
    renderHomeTab();
})();


const homeLink = document.querySelector('#home-link');
homeLink.addEventListener('click', renderHomeTab);

const menuLink = document.querySelector('#menu-link');
menuLink.addEventListener('click', renderMenuTab);

const contactLink = document.querySelector('#contact-link');
contactLink.addEventListener('click', renderContactTab);