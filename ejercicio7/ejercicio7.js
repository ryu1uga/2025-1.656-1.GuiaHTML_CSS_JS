let EliminarUltimoElemento = function()
{
    let lista = document.getElementById("lista")

    let ultimoElemento = lista.lastElementChild
    lista.removeChild(ultimoElemento)
}

let main = function()
{
    let boton = document.getElementById("boton")
    boton.addEventListener("click", EliminarUltimoElemento)
}

main()