import initOutSideClick from './outsideClick.js';

export default function initMobileMenu() {
    const button = document.querySelector('[data-modal="btn-menu"]');
    const menu = document.querySelector('.menu');
    const submenu = document.querySelector('.submenu');
    const eventos = ['click', 'touchstart'];
    const activeMenu = document.querySelector('[data-modal="act-dropdown"]');

    function initMenu() {
        menu.classList.add('ativo');
        button.classList.add('active');
        initOutSideClick(menu, eventos, () =>{
            menu.classList.remove('ativo');
            button.classList.remove('active');
            submenu.classList.remove('ativo');
            activeMenu.classList.remove('ativo');

        });
    }

    eventos.forEach((evento) => {
        button.addEventListener(evento, initMenu)
    })
}

