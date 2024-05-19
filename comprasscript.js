document.addEventListener('DOMContentLoaded', () => {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (!usuarioActual) {
        alert('¡Debes iniciar sesión para ver tus compras!');
        window.location.href = 'login.html';
        return;
    }

    const compras = JSON.parse(localStorage.getItem('compras')) || {};
    const comprasUsuario = compras[usuarioActual.nombre] || [];

    const listaCompras = document.getElementById('listaCompras');
    if (comprasUsuario.length > 0) {
        comprasUsuario.forEach(compra => {
            const compraItem = document.createElement('div');
            compraItem.textContent = compra;
            listaCompras.appendChild(compraItem);
        });
    } else {
        listaCompras.textContent = 'No has realizado ninguna compra.';
    }
});
