document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch API o AJAX
    alert('Formulario enviado con éxito!');
    this.reset();
});