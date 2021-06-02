let favSection = document.getElementsByClassName("favs")[0];
let favContainer = document.getElementsByClassName("favsContainer")[0];
let favBoton = document.getElementsByClassName("b-like")


let quantityFavs = document.getElementsByClassName("gifInFav");
if (quantityFavs == 0 || quantityFavs.length == 0) {
}else{
    favContainer.innerHTML = spanprueba;
}

// function favTest() {
//   let elementos = document.querySelectorAll(".prueba-gifs");
//   console.log(elementos);
// }

// elementos.forEach((span) => {
//   const input = document.getElementById("searchbox");

//   span.onclick = function () {
//     document.getElementsByTagName("span").value = this.innerHTML;
//     input.value = this.innerHTML;

//     console.log(this.innerHTML);
//   };
// });

// let