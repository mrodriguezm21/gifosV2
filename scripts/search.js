const btnSearch = document.getElementById("search-icon");
const searchTerm = document.getElementById("searchbox");
const toReplace = document.getElementsByClassName("text1")[0];

let cont = 0

// Eventos
btnSearch.addEventListener("click", () => {
  test = 9;
  getGifs();
});

searchTerm.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    test = 9;
    event.preventDefault();
    getGifs();
  }
});

// Llamado a la api de giphy search
async function getGifs(gifLen, inputValue) {
  try {
    gifLen = Gifs();
    inputValue = searchTerm.value;

    let url = `https://api.giphy.com/v1/gifs/search?&q=${inputValue}&limit=${gifLen}&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
    const resp = await fetch(url);
    const json = await resp.json();
    const data = json.data;
    let salida = "";
    data.forEach((e) => {
      salida += ` <div class="gif">
        <img src="${e.images.fixed_width.url}"  class="cuadrogip"/>
        <ul class="prueba-gifs">
          <li><img class="b-like" src="assets/icon-fav.svg" onclick="addgif('${e.id}')"/></li>
          <li><img class="b-down" src="assets/icon-download.svg" onclick=downloadGift('${e.images.original.url}') /></li>
          <li><img class="b-exp" src="assets/icon-max-normal.svg" /></li>
        </ul>
      </div>`;
      cont = cont + 1
    });
    if (salida.length <= 0) {
      document.getElementsByClassName("results")[0].innerHTML =
        "No se encontró ningún gif :(";
    } else {
      document.getElementsByClassName("results")[0].innerHTML = salida;
      document.getElementsByClassName("trendingS")[0].style.display = "none";
      document.getElementsByClassName("button-more")[0].style.display = "block";
    }

let favBoton = document.getElementsByClassName("b-like")
console.log(favBoton);
  } catch (error) {
    console.error(error);
  }
}

//Funcionalidad de boton ver mas
function Gifs() {
  test = test + 3;
  cont = 0
  return test;
}

//Obtener lista de gifs
async function favTest() {
  try {
    let elementos = document.querySelectorAll(".cuadrogip");
    for (let i = 0; i < elementos.length; i++) {
      const element = elementos[i].attributes.src.value;
      console.log(element);
    }
  } catch (error) {
    console.error(error);
  }
}

