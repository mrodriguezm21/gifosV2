const btnSearch = document.getElementById("search-icon");
const searchTerm = document.getElementById("searchbox");
const toReplace = document.getElementsByClassName("text1")[0];


let test = 9;

btnSearch.addEventListener("click", () => {
  test = 9;
  showGifs();
});

searchTerm.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    test = 9;
    event.preventDefault();
    showGifs();
  }
});

async function getGifs(gifLen, inputValue) {
  let url = `https://api.giphy.com/v1/gifs/search?&q=${inputValue}&limit=${gifLen}&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;
  return data;
}
function showGifs() {
  let data = getGifs(Gifs(), searchTerm.value);
  let salida = "";
  data
    .then((response) => {
      response.forEach((ImageData) => {
        salida += ` <div class="gif">
        <img src="${ImageData.images.fixed_width.url}"  class="cuadrogip"/>
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
      }
    })
    .catch((err) => console.error(err));

  toReplace.outerHTML = `<button class="button-more" onclick="showGifs()"></button>`;
}

function Gifs() {
  test = test + 3;
  return test;
}
