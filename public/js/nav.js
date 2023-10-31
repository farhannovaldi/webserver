const currentPath = window.location.pathname;

function markActiveMenu() {
    const menuItems = document.querySelectorAll('header a');
    menuItems.forEach(menuItem => {
        menuItem.classList.remove('active');
    });


    if (currentPath === '/') {
        document.getElementById('menu-home').classList.add('active');
    } else if (currentPath === '/tentang') {
        document.getElementById('menu-tentang').classList.add('active');
    } else if (currentPath === '/bantuan') {
        document.getElementById('menu-bantuan').classList.add('active');
    } else if (currentPath === '/berita') {
        document.getElementById('menu-berita').classList.add('active');
    } else if (currentPath === '/negara') {
        document.getElementById('menu-negara').classList.add('active');
    }
}

markActiveMenu();
