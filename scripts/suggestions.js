async function suggestions() {
  const input = document.getElementById("searchbox");
  const sug = document.querySelector(`#suggestions`);
  const clearbutton = document.getElementById("clearbutton");
  const searchButton = document.getElementById("search-icon")

  if (input.value == null || input.value.length < 2) {
    clearbutton.style.display = "none";
    sug.style.display = "none";
  searchButton.style.display = "block"

    return false;
  }
  sug.style.display = "flex";

  let url = `https://api.giphy.com/v1/tags/related/${input}?&limit=5&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  const resp = await fetch(url);
  const json = await resp.json();
  const data = await json.data;

  for (let i = 0; i < 5; i++) {
    let show = document.querySelector(`.suggestions .sg-${i}`);
    show.innerHTML = data[i].name;
  }

  let elementos = document.querySelectorAll(".suggestions span");
  elementos.forEach((span) => {
    span.onclick = function () {
      document.getElementsByTagName("span").value = this.innerHTML;
      input.value = this.innerHTML;
      test = 9;
      getGifs(input.value);
    };
  });

  clearbutton.style.display = "flex";
  searchButton.style.display = "none"
  clearbutton.onclick = function () {
    input.value = "";
    sug.style.display = "none";
    clearbutton.style.display = "none";
  };
}
