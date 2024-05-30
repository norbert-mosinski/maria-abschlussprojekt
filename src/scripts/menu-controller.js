function onMenuToggle() {
    const menu = document.getElementById('menu');
    console.log('gg');
    if (!menu) {
        return;
    }
    
    const menuIsVisible = !menu.classList.contains('hidden');
    console.log({menuIsVisible});

    if (menuIsVisible) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }
}