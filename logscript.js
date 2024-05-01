const registro = document.getElementById('registro');
const login = document.getElementById('login');
const mensaje = document.getElementById('mensaje');

const seleccion = document.getElementById('seleccion');
const usuario = document.getElementById('usuario');
const administrador = document.getElementById('administrador');

let usuariosRegistrados = [];
let administradoresRegistrados = [];

function registrar(individuo) {
    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const nuevoIndividuo = {
        rut: rut,
        nombre: nombre,
        correo: correo,
        contrasena: contrasena
    };

    if (individuo === 'usuario') {
        usuariosRegistrados.push(nuevoIndividuo);
        mensaje.textContent = '¡Usuario registrado con éxito!';
    } else if (individuo === 'administrador') {
        administradoresRegistrados.push(nuevoIndividuo);
        mensaje.textContent = '¡Administrador registrado con éxito!';
    }

    registro.reset();
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

    const usuarioEncontrado = usuariosRegistrados.find(usuario => 
        usuario.nombre === nombreLogin && usuario.contrasena === contrasenaLogin
    );

    const administradorEncontrado = administradoresRegistrados.find(administrador => 
        administrador.nombre === nombreLogin && administrador.contrasena === contrasenaLogin
    );

    if (usuarioEncontrado) {
        mensaje.textContent = `¡Bienvenido, ${usuarioEncontrado.nombre}!`;
        window.location.href = 'index.html';
    } else if (administradorEncontrado) {
        mensaje.textContent = `¡Bienvenido, ${administradorEncontrado.nombre}!`;
        window.location.href = 'admin.html';
    } else if (usuariosRegistrados.length === 0 && administradoresRegistrados.length === 0) {
        mensaje.textContent = '¡No hay individuos registrados! Primero debes registrarte.';
    } else {
        mensaje.textContent = '¡Nombre o contraseña incorrectos! Inténtalo de nuevo.';
    }
});