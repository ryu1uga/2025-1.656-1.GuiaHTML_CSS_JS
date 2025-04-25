let CrearTarjeta = function()
{
    let nombreInput = document.getElementById("nombre")
    let descripcionInput = document.getElementById("descripcion")
    let precioInput = document.getElementById("precio")
    let tarjetas = document.getElementById("tarjetas")
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    let error3 = document.getElementById("error3")
    error1.innerText = ""
    error2.innerText = ""
    error3.innerText = ""
    if (nombreInput.value == "" || descripcionInput.value == "" || precioInput.value == "")
    {
        if (nombreInput.value == "")
        {
            error1.innerText = "Ingrese el nombre del producto"
        }
        if (descripcionInput.value == "")
        {
            error2.innerText = "Ingrese la descripción del producto"
        }
        if (precioInput.value == "")
        {
            error3.innerText = "Ingrese el precio del producto"
        }
        return
    }

    let tarjeta = document.createElement("div")
    tarjeta.className = "card"
    tarjeta.style = "width: 18rem;"

    let cuerpoTarjeta = document.createElement("div")
    cuerpoTarjeta.className = "card-body"

    let nombre = document.createElement("h5")
    nombre.className = "card-title"
    nombre.innerText = nombreInput.value

    let descripcion = document.createElement("p")
    descripcion.className = "card-text"
    descripcion.innerText = descripcionInput.value

    let precio = document.createElement("p")
    precio.className = "card-text"
    precio.innerText = precioInput.value

    cuerpoTarjeta.appendChild(nombre)
    cuerpoTarjeta.appendChild(descripcion)
    cuerpoTarjeta.appendChild(precio)
    tarjeta.appendChild(cuerpoTarjeta)
    tarjetas.appendChild(tarjeta)

    nombreInput.value = ""
    descripcionInput.value = ""
    precioInput.value = ""
}

let main = function()
{
    let crear = document.getElementById("crear")
    crear.addEventListener("click", CrearTarjeta)
}

main()