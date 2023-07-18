let collapsedNavbar = document.getElementsByClassName("navbar-toggler");

Array.from(collapsedNavbar).forEach(element => {
    element.addEventListener('click', () => {
        console.log("Clicked");
    })
})

