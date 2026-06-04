import{recetas} from "./recetas.js"
let app = document.getElementById("app")

for(let i = 0; i < recetas.length; i++){
    app.innerHTML += `
    <div class = "tarjeta">
        <img src = "${recetas[i].imagen}" width = "200">
        <h2>${recetas[i].nombre}</h2>
        <p>Categoria: ${recetas[i].categoria}</P>
        <p>Tiempo: ${recetas[i].tiempo}</p>
        <button value = ${i}>Ver receta</button>
    </div>
    <hr>
    
    `
}

let botones = document.getElementsByTagName("button")

for(const key in botones){
    if(!Object.hasOwn(botones, key))continue;
    const boton = botones[key]
    boton.addEventListener("click", mostrar)
}

function mostrar(e){
    let posicion = e.target.value
    localStorage.setItem("receta", posicion)
    window.location.href = "detalle.html"

}