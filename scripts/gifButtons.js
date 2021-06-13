let Favlist = []

// agregar a favoritos
function addgif(elemento) {
    Favlist = localStorage.getItem('favoritos').split(",")
    console.log(elemento)
    if (!elemento) return console.log('el gif no existe')
    // 
    const favorito = Favlist.find(element => element == elemento )
    if (favorito) return console.log('el elemento ya esta agregado')
    //
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