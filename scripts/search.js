const btnSearch = document.getElementById("search-icon");
const searchTerm = document.getElementById("searchbox");
const toReplace = document.getElementsByClassName("text1")[0];
const onload = new Promise(window.onload = trendingText);
// window.onload = trendingText;
const trendText = document.getElementById("trending-searches");
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

function trendGif(inputData) {
  test = 9;
  searchTerm.value = inputData
  getGifs(inputData);
}

// Llamado a la api de giphy search
async function getGifs(inputValue) {
  try {
    if(inputValue == undefined){
      inputValue = searchTerm.value;
    }
    gifLen = Gifs();
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
          <li><img class="b-down" src="assets/icon-download.svg" onclick="downloadGift('${e.images.original.url}')" /></li>
          <li><img class="b-exp" src="assets/icon-max-normal.svg" onclick="gifExpand('${e.id}')" /></li>
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

// trending text
async function trendingText() {
  try {
    let url = `https://api.giphy.com/v1/trending/searches?&limit=5&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
    const resp = await fetch(url);
    const json = await resp.json();
    const data = await json.data;
    let salida = [];
    for (let i = 0; i < 5; i++) {
      salida += `<a id="${i}" class="cursor" onclick="trendGif('${data[i]}')"> ${data[i]} </a>`;
      if (i < 4) {
        salida += ", ";
      }
    }
    trendText.innerHTML = salida;
    trendText.style.textTransform = "capitalize";
    
  } catch (error) {
    console.error(error);
    
  }
}
