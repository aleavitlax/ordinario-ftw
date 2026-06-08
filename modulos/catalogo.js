let app = document.getElementById("app")

fetch("./xml/recetas.xml")

.then(response => response.text())

.then(datos => {

    let parser = new DOMParser()

    let xml = parser.parseFromString(datos,"text/xml")

    let recetas = xml.getElementsByTagName("receta")

    for(let i = 0; i < recetas.length; i++){

        let nombre =
        recetas[i].getElementsByTagName("nombre")[0].textContent

        let categoria =
        recetas[i].getElementsByTagName("categoria")[0].textContent

        let imagen =
        recetas[i].getElementsByTagName("imagen")[0].textContent

        app.innerHTML += `

            <div class="tarjeta">

                <img src="${imagen}">

                <h2>${nombre}</h2>

                <p>${categoria}</p>

                <button value="${i}">Ver receta</button>

            </div>

        `
    }
    let botones = document.getElementsByTagName("button")

    for(let i = 0; i< botones.length; i++){
        botones[i].addEventListener("click", mostrar)
    }
})


function mostrar(e){
    let posicion = e.target.value
    localStorage.setItem("receta", posicion)
    window.location.href = "detalle.html"

}