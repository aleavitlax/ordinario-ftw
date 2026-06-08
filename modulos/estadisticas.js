let tabla = document.getElementById("tabla")

fetch("./xml/recetas.xml")

.then(response => response.text())

.then(datos => {

    let parser = new DOMParser()
    let xml = parser.parseFromString(datos,"text/xml")
    let recetas = xml.getElementsByTagName("receta")

    for(let i = 0; i < recetas.length; i++){

        let nombre = recetas[i].getElementsByTagName("nombre")[0].textContent

        let categoria = recetas[i].getElementsByTagName("categoria")[0].textContent

        let tiempo =recetas[i].getElementsByTagName("tiempo")[0].textContent

        tabla.innerHTML += `

            <tr>

                <td>${nombre}</td>

                <td>${categoria}</td>

                <td>${tiempo}</td>

            </tr>

        `
    }

})