function mostrarPaginaPrincipal() {
    animacionInicio.style.opacity = 1; 
    setTimeout(() => {
        animacionInicio.style.transition = 'opacity 1s ease-in-out'; 
        animacionInicio.style.opacity = 0; 
        setTimeout(() => {
            animacionInicio.style.display = 'none'; 
            seleccionRol.style.display = 'block'; 
        }, 1000); 
    }, 3000); 
}


window.addEventListener('load', mostrarPaginaPrincipal);