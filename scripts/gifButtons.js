let Favlist = []
const popContainer = document.getElementById(`popContainer`)
// agregar a favoritos
function addgif(elemento) {
    try {
        Favlist = localStorage.getItem('favoritos').split(",")
    } catch (error) {}
    if (!elemento) return console.log('el gif no existe')
    const favorito = Favlist.find(element => element == elemento )
    if (favorito) return console.log('el elemento ya esta agregado')
    Favlist.push(elemento)
    localStorage.setItem('favoritos',Favlist)
}

// descargar gifs
async function downloadGift(gif) {
    const URLgif = await fetch(gif);
    const gifBlob = await URLgif.blob();
    const gifDownload = URL.createObjectURL(gifBlob);
    let a = document.createElement("a");
    a.download = `giphy_ib_${gif}`;
    a.target = "_blank";
    a.href = gifDownload;
    a.click();
    
}

//Expand gif
async function gifExpand(gif) {
    const img = await fetch(`https://api.giphy.com/v1/gifs/${gif}?api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`)
    const imgGif = await img.json()
    const imgUrl = imgGif.data.images.original.url
    popContainer.innerHTML = `<div class="popContainer" onclick=closeGif()><img src="${imgUrl}"></div>`
}

//Close gif
function closeGif() {
    popContainer.innerHTML = ''
}