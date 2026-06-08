let usuario = document.getElementById("usuario")
let password = document.getElementById("password")
let boton = document.getElementById("btnLogin")
let mensaje = document.getElementById("mensaje")

boton.addEventListener("click", validar)

function validar() {
    fetch("./xml/usuarios.xml")
    .then(response => response.text())
    .then(datos => {
        let parser = new DOMParser()
        let xml = parser.parseFromString(datos, "text/xml")
        let usuarios = xml.getElementsByTagName("usuario")
        let encontrado = false

        for (let i = 0; i < usuarios.length; i++) {
            let nombre = usuarios[i].getElementsByTagName("nombre")[0].textContent
            let pass = usuarios[i].getElementsByTagName("password")[0].textContent

            if (usuario.value == nombre && password.value == pass) {
                encontrado = true
                break; // Rompemos el ciclo si ya lo encontramos, para mayor eficiencia
            }
        }

        if (encontrado) {
            mensaje.style.color = "#2e7d32"; // Texto verde para éxito
            mensaje.innerText = "Acceso correcto"
            window.location.href = "index.html"
        } else {
            mensaje.style.color = "#c62828"; // Texto rojo para error
            mensaje.innerText = "Usuario o contraseña incorrectos"
        }
    })
}