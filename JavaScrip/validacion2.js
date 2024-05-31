function validarFormulario() {
    var correo = document.getElementsByName('app')[0].value;
    var contraseña = document.getElementsByName('con-usuario')[0].value;

    var error_correo = document.getElementById('error_correo');
    var error_contraseña = document.getElementById('error_contraseña');

    error_correo.textContent = '';
    error_contraseña.textContent = '';

    var valido = true;

    // Validación del correo electrónico
    if (!/\S+@\S+\.\S+/.test(correo)) {
        error_correo.textContent = 'El correo electrónico ingresado no es válido.';
        valido = false;
    } else if (correo.indexOf('@') === -1 || correo.indexOf('.') === -1) {
        error_correo.textContent = 'El correo electrónico debe contener un "@" y una extensión de dominio válida.';
        valido = false;
    }

    // Validación de la contraseña
    if (contraseña.length < 6) {
        error_contraseña.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        valido = false;
    }

    return valido;
}
