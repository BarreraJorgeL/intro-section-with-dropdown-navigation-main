const header = document.querySelector('.js-header');
const menu = document.querySelector('.js-menu');
const body = document.querySelector('.js-body');
const bodyState = document.querySelector('[data-body-state]');

/*
function placeMenu(){
    let menuWidth = menu.getBoundingClientRect().width;
    let pageWidth = body.getBoundingClientRect().width;
    console.log((menuWidth/pageWidth)*100);
    menu.style.right = `-${(menuWidth/pageWidth)*100}%`;
}

placeMenu();
*/
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

function toggleSubmenu(submenu){
    switch(submenu.dataset.submenuState){
        case 'closed':
            submenu.style.height = 'auto';
            submenu.dataset.submenuState = 'open';
            break;
        case 'open':
            submenu.style.height = '0';
            submenu.dataset.submenuState = 'closed';
            break;
    }
}

header.addEventListener('click', e => {
    if(e.target.dataset.name == 'toggleMenu'){
        toggleMenu(menu);
    }
    else if(e.target.dataset.name == 'toggleSubmenu'){
        toggleSubmenu(e.target.nextElementSibling);
    }
});
