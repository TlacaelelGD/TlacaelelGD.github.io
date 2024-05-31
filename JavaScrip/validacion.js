function validarFormulario() {
    var direccion = document.getElementById('direccion').value;
    var forma_pago = document.getElementById('forma_pago').value;
    var nom_usuario = document.getElementsByName('nom-usuario')[0].value;
    var numero_tarjeta = document.getElementById('numero_tarjeta').value;
    var fecha_vencimiento = document.getElementById('fecha_vencimiento').value;
    var cvv = document.getElementById('cvv').value;

    // Validación de campos obligatorios
    if (direccion === '' || forma_pago === '' || nom_usuario === '' || numero_tarjeta === '' || fecha_vencimiento === '' || cvv === '') {
        alert('Por favor, llene todos los campos obligatorios.');
        return false;
    }

    // Validación de formato de tarjeta de crédito y CVV (solo números)
    if (!/^\d+$/.test(numero_tarjeta)) {
        alert('El número de tarjeta debe contener solo números.');
        return false;
    }
    if (!/^\d+$/.test(cvv)) {
        alert('El CVV debe contener solo números.');
        return false;
    }

    return true; // Envía el formulario si pasa todas las validaciones
}