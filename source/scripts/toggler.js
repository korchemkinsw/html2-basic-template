/* eslint-disable no-unused-vars */
//меню мобильной версии

const menuButton = document.querySelector('.user-menu__toggler');
const siteMenu = document.querySelector('.site-menu');
menuButton.classList.remove('.user-menu__toggler--nojs');
menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('user-menu__toggler--open')) {
    menuButton.classList.remove('user-menu__toggler--open');
    siteMenu.classList.add('site-menu--hidden');
  } else {
    menuButton.classList.add('user-menu__toggler--open');
    siteMenu.classList.remove('site-menu--hidden');
  }
});
