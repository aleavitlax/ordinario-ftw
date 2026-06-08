import { destacadas } from "./recetas.js"

let app = document.getElementById("destacadas")

for(let i = 0; i < destacadas.length; i++){

    app.innerHTML += `

        <div class="tarjeta" data-id="${destacadas[i].id}">

            <img src="${destacadas[i].imagen}" width = "200">

            <h3>${destacadas[i].nombre}</h3>

            <p>${destacadas[i].categoria}</p>

        </div>

    `
}

    let tarjetas = document.getElementsByClassName("tarjeta")

    for(let i = 0; i < tarjetas.length; i++){
        tarjetas[i].addEventListener("click", mostrar)

    }
    function mostrar(e){
        let posicion = e.currentTarget.dataset.id
        localStorage.setItem("receta", posicion)
        window.location.href = "detalle.html"

}
