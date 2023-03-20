export default function initDropdownModal() {
    const activeMenu = document.querySelector('[data-modal="act-dropdown"]')

    function ativaMenu(evento) {
        evento.preventDefault();
        const initDropdown = document.querySelector('[data-modal="dropdown"]');

        initDropdown.classList.toggle('ativo');
        activeMenu.classList.toggle('ativo');
    }

    activeMenu.addEventListener('click', ativaMenu)
}
