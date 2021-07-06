const miniMenu = document.getElementById('submenu');

const activator = document.getElementById('activater')

document.getElementById("activater").addEventListener('click', showMenu);

function showMenu () {
    miniMenu.classList.toggle('active')
}