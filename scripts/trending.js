window.onload = showTrending;
const trendText = document.getElementById("trending-searches");
import "./search.js";




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
          salida += `<a id="${i}"> ${response[i]} </a>`;
          // `<span id="${i}" class="x"> ${response[i]} </span>`
          if (i < 4) {
            salida += ", ";
          }
        }
        trendText.innerHTML = salida;
        trendText.style.textTransform = "capitalize";
      })
      .catch((err) => console.error(err));
  }