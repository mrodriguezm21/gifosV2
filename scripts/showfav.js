try {
  const favoritos = localStorage.getItem("favoritos").split(",");
  const favs = document.getElementById("favsContainer");
  const empty = document.getElementsByClassName("is-empty");
  
  function getfav() {
    if (favoritos == 0 || favoritos.length == 0) {
      return false;
    } else {
    favs.style.flexDirection = "row";
      favoritos.forEach((element) => {
        fetch(
          `https://api.giphy.com/v1/gifs/${element}?api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`
        )
          .then((response) => response.json())
          .then((response) => {
            favs.innerHTML += showfav(response);
          });
      });
      for (let i = 0; i < empty.length; i++) {
        document.getElementsByClassName("is-empty")[i].style.display = "none";
      }
    }
  }

  function showfav(element) {
    return ` <div class="gif">
          <img src="${element.data.images.fixed_width.url}" class="cuadrogip"/>
          <ul class="prueba-gifs">
              <li><img class="b-like" src="assets/icon-fav.svg" onclick="addgif('${element.data.id}')" /></li>
              <li><img class="b-down" src="assets/icon-download.svg" onclick="downloadGift('${element.data.images.original.url}')" /></li>
              <li><img class="b-exp" src="assets/icon-max-normal.svg" onclick="gifExpand('${element.data.id}')" /></li>
          </ul>
      </div>`;
  }

  getfav();
}catch(e){}