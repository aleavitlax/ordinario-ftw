let app = document.getElementById("app")

let posicion = localStorage.getItem("receta")

fetch("./xml/recetas.xml")

.then(response => response.text())

.then(datos => {

    let parser = new DOMParser()

    let xml = parser.parseFromString(datos, "text/xml")

    let recetas = xml.getElementsByTagName("receta")

    let receta = recetas[posicion]

    let nombre =
    receta.getElementsByTagName("nombre")[0].textContent

    let categoria =
    receta.getElementsByTagName("categoria")[0].textContent

    let tiempo =
    receta.getElementsByTagName("tiempo")[0].textContent

    let ingredientes =
    receta.getElementsByTagName("ingredientes")[0].textContent

    let imagen =
    receta.getElementsByTagName("imagen")[0].textContent

    let preparacion =
    receta.getElementsByTagName("modo_preparacion")[0].textContent

    app.innerHTML = `

        <img src="${imagen}" width="300">

        <h2>${nombre}</h2>

        <p><b>Categoría:</b> ${categoria}</p>

        <p><b>Tiempo:</b> ${tiempo}</p>

        <p><b>Ingredientes:</b> ${ingredientes}</p>

        <p><b>Modo de preparación:</b> ${preparacion}</p>

    `
})