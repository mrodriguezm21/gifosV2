async function suggestions() {
  const input = document.getElementById("searchbox").value;
  const sug = document.querySelector(`#suggestions`);

  if (input == null || input.length < 2) {
    sug.style.display = "none";
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
}

let elementos = document.querySelectorAll(".suggestions span");
const input = document.getElementById("searchbox");
elementos.forEach((span) => {
  const input = document.getElementById("searchbox");

  span.onclick = function () {
    document.getElementsByTagName("span").value = this.innerHTML;
    input.value = this.innerHTML;
    test=9;
    getGifs(input.value);
  };
});


const clearbutton = document.getElementById("clearbutton")
clearbutton.onclick = function(){
  input.value = ""
}
