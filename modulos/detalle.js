let app = document.getElementById("app")
let posicion = localStorage.getItem("receta")

fetch("./xml/recetas.xml")
.then(response => response.text())
.then(datos => {
    let parser = new DOMParser()
    let xml = parser.parseFromString(datos, "text/xml")
    let recetas = xml.getElementsByTagName("receta")
    let receta = recetas[posicion]

    let nombre = receta.getElementsByTagName("nombre")[0].textContent
    let categoria = receta.getElementsByTagName("categoria")[0].textContent
    let tiempo = receta.getElementsByTagName("tiempo")[0].textContent
    let ingredientes = receta.getElementsByTagName("ingredientes")[0].textContent
    let imagen = receta.getElementsByTagName("imagen")[0].textContent
    let preparacion = receta.getElementsByTagName("modo_preparacion")[0].textContent

    // Cambiamos el id de "app" al nuevo contenedor estilizado en el CSS
    app.id = "app-detalle";

    // Reestructuramos el HTML inyectado para usar la rejilla moderna
    app.innerHTML = `
        <div class="detalle-foto-contenedor">
            <img src="${imagen}" alt="${nombre}">
        </div>
        
        <div class="detalle-info">
            <h2>${nombre}</h2>
            <div class="meta-receta">
                <span class="pildora-meta">📁 ${categoria}</span>
                <span class="pildora-meta">⏱️ ${tiempo}</span>
            </div>
        </div>
        
        <div class="seccion-contenido">
            <h3>Ingredientes</h3>
            <p>${ingredientes}</p>
        </div>
        
        <div class="seccion-contenido">
            <h3>Modo de preparación</h3>
            <p>${preparacion}</p>
        </div>
    `
})