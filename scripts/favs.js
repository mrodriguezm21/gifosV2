function favTest() {
  let elementos = document.querySelectorAll(".prueba-gifs");
  console.log(elementos);
}

elementos.forEach((span) => {
  const input = document.getElementById("searchbox");

  span.onclick = function () {
    document.getElementsByTagName("span").value = this.innerHTML;
    input.value = this.innerHTML;

    console.log(this.innerHTML);
  };
});
