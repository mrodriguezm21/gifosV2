let hamburgerButton = document.getElementById("burger");
let nav = document.getElementById("burger-responsive");
let list = document.getElementById("list-head");

hamburgerButton.addEventListener("click", () =>{
    nav.classList.toggle("is-active");
})
