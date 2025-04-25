let Enviar = function()
{
    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    let mensaje = document.getElementById("mensaje")
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    let error3 = document.getElementById("error3")
    let error4 = document.getElementById("error4")
    if (nombre.value == "" || email.value == "" || mensaje.value == "")
    {
        if (nombre.value == "")
        {
            error1.innerText = "Ingrese el nombre"
        }
        if (email.value == "")
        {
            error2.innerText = "Ingrese el email"
        }
        if (mensaje.value == "")
        {
            error3.innerText = "Ingrese el mensaje"
        }
        return
    }
    if (!email.value.includes("@") || !email.value.includes("."))
    {
        error4.innerText = "El email ingresado no es válido"
        return
    }
    else
    {
        console.log("Se envió correctamente")
    }
}

let main = function()
{
    let butEnviar = document.getElementById("but_enviar")
    butEnviar.addEventListener("click", Enviar)
}

main()