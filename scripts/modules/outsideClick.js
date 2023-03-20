export default function initClickOutside(elemento, eventos, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!elemento.hasAttribute(outside)){
        eventos.forEach(userEvent => {
            setTimeout( () => {
                html.addEventListener(userEvent, handleOutsideClick);
            }, 0)
        })
        elemento.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        if(!elemento.contains(event.target)){
            elemento.removeAttribute(outside);

            eventos.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick)
            })

            callback();
        }
    }
}




