let boton = document.getElementById("enviar")

boton.addEventListener("click", enviar)

function enviar(){

    let nombre =
    document.getElementById("nombre").value

    let correo =
    document.getElementById("correo").value

    let mensaje =
    document.getElementById("mensaje").value

    if(
        nombre == "" ||
        correo == "" ||
        mensaje == ""
    ){

        alert("Completa todos los campos")

        return
    }

    alert("Mensaje enviado correctamente")
}