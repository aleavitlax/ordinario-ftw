import {recetas} from "./recetas.js"
let app = document.getElementById("app")
let posicion = localStorage.getItem("receta")
let receta = recetas[posicion]

app.innerHTML = `
    <img src ="${receta.imagen}" width = "200">
    <h2>${receta.nombre}</h2>
    <p><b>Categoria: </b>${receta.categoria}</p>
    <p><b>Tiempo:</b>${receta.tiempo}</p>
    <p><b>Ingredientes:</b>${receta.ingredientes}</p>
    <p><b>Modo de preparación:</b>${receta.modo_preparacion}</p>

`