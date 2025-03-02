document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function () {
            let menu = this.querySelector(".dropdown-menu");
            menu.classList.toggle("show");
        });
    });
});