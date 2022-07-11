const header = document.querySelector('.js-header');
const menu = document.querySelector('.js-menu');
const subMenus = Array.from(document.querySelectorAll('[data-name = "toggleSubmenu"]'));
const body = document.querySelector('.js-body');
const bodyState = document.querySelector('[data-body-state]');

function toggleMenu(menu){
    switch(menu.dataset.menuState){
        case 'closed':
            menu.style.transform = 'translateX(-100%)';
            menu.dataset.menuState = 'open';
            bodyState.dataset.bodyState = 'disable';
            break;
        case 'open':
            menu.style.transform = 'translateX(0)';
            menu.dataset.menuState = 'closed';
            bodyState.dataset.bodyState = 'enable';
            break;
    }
}

function toggleSubmenu(target, submenu){
    switch(submenu.dataset.submenuState){
        case 'closed':
            submenu.style.height = 'auto';
            submenu.dataset.submenuState = 'open';
            target.firstElementChild.src = 'images/icon-arrow-up.svg';
            break;
        case 'open':
            submenu.style.height = '0';
            submenu.dataset.submenuState = 'closed';
            target.firstElementChild.src = 'images/icon-arrow-down.svg';
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
        if(window.innerWidth >= 900){
            toggleSubmenu(subMenu.offsetParent.firstElementChild, subMenu.offsetParent.lastElementChild);
        }
    })
    subMenu.offsetParent.addEventListener('mouseleave', () => {
        if(window.innerWidth >= 900){
            toggleSubmenu(subMenu.offsetParent.firstElementChild, subMenu.offsetParent.lastElementChild);
        }
    })
})