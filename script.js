const menu = document.querySelector('.js-menu');
const subMenus = Array.from(document.querySelectorAll('.js-submenu'));
const body = document.querySelector('.js-body');

function toggleMenu(menu){
    switch(menu.dataset.menuState){
        case 'closed':
            menu.style.transform = 'translateX(-100%)';
            menu.dataset.menuState = 'open';
            body.dataset.bodyState = 'disable';
            break;
        case 'open':
            menu.style.transform = 'translateX(0)';
            menu.dataset.menuState = 'closed';
            body.dataset.bodyState = 'enable';
            break;
    }
}
function closeSubmenu(submenuButton, submenu){
    submenu.style.height = '0';
    submenu.dataset.submenuState = 'closed';
    submenuButton.firstElementChild.src = 'images/icon-arrow-down.svg';
}
function openSubmenu(submenuButton, submenu){
    submenu.style.height = 'auto';
    submenu.dataset.submenuState = 'open';
    submenuButton.firstElementChild.src = 'images/icon-arrow-up.svg';
}

function toggleSubmenu(submenuButton, submenu){
    switch(submenu.dataset.submenuState){
        case 'closed':
            openSubmenu(submenuButton, submenu)
            break;
        case 'open':
            closeSubmenu(submenuButton, submenu)
            break;
    }
}

document.addEventListener('click', e => {
    if(e.target.dataset.name == 'toggleMenu'){
        toggleMenu(menu);
    }
    else if(e.target.dataset.name == 'toggleSubmenu' && window.innerWidth <= 900){
        toggleSubmenu(e.target, e.target.nextElementSibling);
    }
});

subMenus.forEach(subMenu => {
    subMenu.offsetParent.addEventListener('mouseenter', () => {
        if(window.innerWidth >= 900 && subMenu.dataset.submenuState == 'closed'){
            openSubmenu(subMenu.previousElementSibling, subMenu);
        }
    })
    subMenu.offsetParent.addEventListener('mouseleave', () => {
        if(window.innerWidth >= 900 && subMenu.dataset.submenuState == 'open'){
            closeSubmenu(subMenu.previousElementSibling, subMenu);
        }
    })
})