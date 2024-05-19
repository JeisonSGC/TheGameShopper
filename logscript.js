const registro = document.getElementById('registro');
const login = document.getElementById('login');
const mensaje = document.getElementById('mensaje');

const seleccion = document.getElementById('seleccion');
const usuario = document.getElementById('usuario');
const administrador = document.getElementById('administrador');

function obtenerUsuariosRegistrados() {
    return JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
}

function guardarUsuarioRegistrado(usuario) {
    let usuariosRegistrados = obtenerUsuariosRegistrados();
    usuariosRegistrados.push(usuario);
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
}

function registrar(individuo) {
    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const nuevoIndividuo = { rut, nombre, correo, contrasena, tipo: individuo };

    guardarUsuarioRegistrado(nuevoIndividuo);

    mensaje.textContent = `¡${individuo.charAt(0).toUpperCase() + individuo.slice(1)} registrado con éxito!`;

    document.getElementById('formRegistro').reset();
}

usuario.addEventListener('click', () => {
    seleccion.classList.add('animate__animated', 'animate__slideOutLeft');
    setTimeout(() => {
        seleccion.style.display = 'none';
        registro.style.display = 'block';
        registro.classList.add('animate__animated', 'animate__slideInRight');
    }, 1000);

    registro.removeEventListener('submit', registrar);
    registro.addEventListener('submit', (e) => {
        e.preventDefault();
        registrar('usuario');
    });
});

administrador.addEventListener('click', () => {
    seleccion.classList.add('animate__animated', 'animate__slideOutLeft');
    setTimeout(() => {
        seleccion.style.display = 'none';
        registro.style.display = 'block';
        registro.classList.add('animate__animated', 'animate__slideInRight');
    }, 1000);

    registro.removeEventListener('submit', registrar);
    registro.addEventListener('submit', (e) => {
        e.preventDefault();
        registrar('administrador');
    });
});

login.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreLogin = document.getElementById('nombreLogin').value;
    const contrasenaLogin = document.getElementById('contrasenaLogin').value;

    const usuariosRegistrados = obtenerUsuariosRegistrados();

    const usuarioEncontrado = usuariosRegistrados.find(usuario => 
        usuario.nombre === nombreLogin && usuario.contrasena === contrasenaLogin
    );

    if (usuarioEncontrado) {
        mensaje.textContent = `¡Bienvenido, ${usuarioEncontrado.nombre}!`;
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
        window.location.href = 'index.html';
    } else {
        mensaje.textContent = '¡Nombre o contraseña incorrectos! Inténtalo de nuevo.';
    }
});
