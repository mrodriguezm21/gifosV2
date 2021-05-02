const btnSearch = document.getElementById("search-icon");
const searchTerm = document.getElementById("searchbox");
const toReplace = document.getElementsByClassName("text1")[0];

let test = 8;

btnSearch.addEventListener("click", () => {
  test = 8;
  showGifs();
});
btnSearch.addEventListener("click", () => {
  searchTerm.value = "";
});

async function getGifs(gifLen) {
  let inputValue = searchTerm.value;
  let url = `https://api.giphy.com/v1/gifs/search?&q=${inputValue}&limit=${gifLen}&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;
  return data;
}
function showGifs() {
  let data = getGifs(Gifs());
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

  console.log(toReplace.outerHTML);

  toReplace.outerHTML = `<span class="button-more" onclick="showGifs()"></span>`;
}

function Gifs() {
  test = test + 4;
  return test;
}
