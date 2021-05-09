const btnSearch = document.getElementById("search-icon");
const searchTerm = document.getElementById("searchbox");
const toReplace = document.getElementsByClassName("text1")[0];


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

  gifLen = Gifs();
  inputValue = searchTerm.value

  let url = `https://api.giphy.com/v1/gifs/search?&q=${inputValue}&limit=${gifLen}&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;
  console.log(data[0].images.fixed_width.url);

  let salida = "";
  data.forEach(e => {
    salida += ` <div class="gif">
        <img src="${e.images.fixed_width.url}"  class="cuadrogip"/>
        <ul class="prueba-gifs">
          <li><img class="b-like" src="assets/icon-fav.svg" /></li>
          <li><img class="b-down" src="assets/icon-download.svg" /></li>
          <li><img class="b-exp" src="assets/icon-max-normal.svg" /></li>
        </ul>
      </div>`;
  });
  if (salida.length <= 0) {
    document.getElementsByClassName("results")[0].innerHTML =
      "No se encontró ningún gif :(";
  } else {
    document.getElementsByClassName("results")[0].innerHTML = salida;
  };
  toReplace.outerHTML = `<button class="button-more" onclick="getGifs()"></button>`;
}


//Funcionalidad de boton ver mas
function Gifs() {
  test = test + 3;
  return test;
}
