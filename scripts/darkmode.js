let btndarkmode = document.getElementById("btndarkmode");
let tema = localStorage.getItem("modo");

let cambioTema = () => {
  if (tema === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  if (tema == "dark") {
    btndarkmode.innerHTML = "MODO DIURNO";
  } else {
    btndarkmode.innerHTML = "MODO NOCTURNO";
  }
};
btndarkmode.addEventListener("click", () => {
  if (tema === "dark") {
    tema = "light";
  } else {
    tema = "dark";
  }
  localStorage.setItem("modo", tema);
  cambioTema();
});
if (tema == "dark") {
  cambioTema();
}
