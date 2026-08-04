const sidebar = document.querySelector('#sidebar');
const themeToggle = document.querySelector('#themeToggle');

const savedTheme = localStorage.getItem('glucc-sidebar-theme');
if (savedTheme === 'light' && sidebar) {
    sidebar.classList.add('theme-light');
}

if (themeToggle && sidebar) {
    const syncButtonState = () => {
        const isLight = sidebar.classList.contains('theme-light');
        themeToggle.classList.toggle('active', isLight);
        themeToggle.setAttribute('aria-pressed', String(isLight));
    };

    syncButtonState();

    themeToggle.addEventListener('click', () => {
        const isLight = sidebar.classList.toggle('theme-light');
        localStorage.setItem('glucc-sidebar-theme', isLight ? 'light' : 'dark');
        syncButtonState();
    });
}
