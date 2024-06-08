function onMenuToggle() {
    const menu = document.getElementById('menu');
    if (!menu) {
        return;
    }
    
    const menuIsVisible = !menu.classList.contains('hidden');

    if (menuIsVisible) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }
}