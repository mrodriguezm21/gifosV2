window.onload = trendGifs;

let slideShow = document.getElementsByClassName("trendingGifs")[0];
async function trendGifs() {
  let url = `https://api.giphy.com/v1/gifs/trending?&limit=3&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;

  let salida = "";

  data.forEach((ImageData) => {
    salida += `
    <li>
        <div class="gif2">
            <img src="${ImageData.images.fixed_width.url}" alt="" />
            <ul class="prueba-gifs">
            <li><img class="b-like" src="assets/icon-fav.svg" id="${ImageData.id}" onclick="addgif('${ImageData.id}')"/></li>
            <li>
                <img class="b-down" src="assets/icon-download.svg" alt="" />
            </li>
            <li>
                <img class="b-exp" src="assets/icon-max-normal.svg" alt="" />
            </li>
            </ul>
        </div>
    </li>
      `;
  });
  if (salida.length <= 0) {
    slideShow.innerHTML = "No se encontró ningún gif :(";
  } else {
    slideShow.innerHTML = salida;
  }
}
