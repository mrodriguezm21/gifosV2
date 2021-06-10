let Favlist = []
if(Favlist == 0 || Favlist.length == 0){
}
else{
    Favlist = localStorage.getItem('favoritos').split(",")
}

function addgif(elemento) {
    console.log(elemento)
    if (!elemento) return console.log('el gif no existe')
    // 
    const favorito = Favlist.find(element => element == elemento )
    if (favorito) return console.log('el elemento ya esta agregado')
    //
    Favlist.push(elemento)
    localStorage.setItem('favoritos',Favlist)
}