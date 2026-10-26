// Lógica del Botón de Cambio de Tema (Modo Claro / Oscuro)
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    function updateIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        toggleBtn.textContent = isDark ? '☀️' : '🌙';
    }

    // Inicializar icono correcto al cargar la página
    updateIcon();

    // Evento al hacer clic en el botón
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateIcon();
    });
});