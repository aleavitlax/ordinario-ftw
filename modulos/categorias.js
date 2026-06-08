let app = document.getElementById("app")
let categoria = document.getElementById("categoria")

categoria.addEventListener("change", cargar)

cargar()

function cargar(){

    app.innerHTML = ""

    fetch("./xml/recetas.xml")

    .then(response => response.text())

    .then(datos => {

        let parser = new DOMParser()

        let xml = parser.parseFromString(datos,"text/xml")

        let recetas = xml.getElementsByTagName("receta")

        for(let i = 0; i < recetas.length; i++){

            let nombre =
            recetas[i].getElementsByTagName("nombre")[0].textContent

            let categoriaReceta =
            recetas[i].getElementsByTagName("categoria")[0].textContent

            let imagen =
            recetas[i].getElementsByTagName("imagen")[0].textContent

            if(
                categoria.value == "Todas"
                ||
                categoria.value == categoriaReceta
            ){

                app.innerHTML += `

                    <div class="tarjeta">

                        <img src="${imagen}">

                        <h2>${nombre}</h2>

                        <p>${categoriaReceta}</p>

                        <button value ="${i}">
                         ver receta
                        </button>

                    </div>

                `
            }
        }

        let botones = document.querySelectorAll("button")

        botones.forEach(boton => {

            boton.addEventListener("click", mostrar)

        })
    })
}

function mostrar(e){

    let posicion = e.target.value

    localStorage.setItem("receta", posicion)

    window.location.href = "detalle.html"

}