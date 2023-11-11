// Espera a que el DOM esté completamente cargado antes de ejecutar el código, DOM sirve para cambiar apariencias de la pagina web de forma dinamica.
document.addEventListener('DOMContentLoaded', function() {
    // Referencia al interruptor de cambio de tema
    const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

    // Verifica si hay un tema almacenado localmente
    const storedTheme = localStorage.getItem('theme');

    // Si hay un tema almacenado, lo aplico y actualizo
    if (storedTheme) {
        document.documentElement.setAttribute('tema', storedTheme);
        colorSwitch.checked = storedTheme === 'dark';
    }

    // Funcion para cambiar el tema
    function cambiaTema(ev) {
        // Selecciona el tema segun lo que tenga seleccionado
        const theme = ev.target.checked ? 'dark' : 'light';

        // Cambia el tema del HTML
        document.documentElement.setAttribute('tema', theme);

        // Almacena el tema seleccionado localmente en el navegador
        localStorage.setItem('theme', theme);
    }

    // Agrega un event listener al interruptor para detectar cambios
    colorSwitch.addEventListener('change', cambiaTema);
});
