window.onload = showTrending;

const btnSearch = document.getElementById("search-icon");
const searchTerm = document.getElementById("searchbox");
const toReplace = document.getElementsByClassName("text1")[0];
const trendText = document.getElementById("trending-searches");

btnSearch.addEventListener("click", showGifs);
btnSearch.addEventListener("click", () => {
  searchTerm.value = "";
});

async function trendingText() {
  let url = `https://api.giphy.com/v1/trending/searches?&limit=5&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;
  return data;
}
function showTrending() {
  let data = trendingText();
  let salida = [];
  data
    .then((response) => {
      for (let i = 0; i < 5; i++) {
        salida += response[i];
        if (i < 4) {
          salida += ", ";
        }
      }
      trendText.innerHTML = salida;
      trendText.style.textTransform = "capitalize";
    })
    .catch((err) => console.error(err));
}

async function getGifs() {
  let inputValue = searchTerm.value;
  let url = `https://api.giphy.com/v1/gifs/search?&q=${inputValue}&limit=12&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;
  return data;
}
function showGifs() {
  let data = getGifs();
  let salida = "";
  data
    .then((response) => {
      response.forEach((ImageData) => {
        salida += ` <div class="gif">
        <img src="${ImageData.images.fixed_width.url}" alt="" class="cuadrogip"/>
        <ul class="prueba-gifs">
          <li><img class="b-like" src="assets/icon-fav.svg" alt="" /></li>
          <li><img class="b-down" src="assets/icon-download.svg" alt="" /></li>
          <li><img class="b-exp" src="assets/icon-max-normal.svg" alt="" /></li>
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
}
