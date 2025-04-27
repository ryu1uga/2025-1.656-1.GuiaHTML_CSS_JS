let AgregarElemento = function()
{
    let lista = document.getElementById("lista")

    let elemento = document.createElement("li")
    elemento.innerText = "Nuevo elemento"

    lista.appendChild(elemento)
}

let main = function()
{
    let boton = document.getElementById("boton")
    boton.addEventListener("click", AgregarElemento)
}

main()