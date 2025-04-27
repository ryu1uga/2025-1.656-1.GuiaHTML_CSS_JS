let CambiarTexto = function()
{
    let texto = document.getElementById("texto")
    texto.textContent = "Texto modificado"
}

let main = function()
{
    let boton = document.getElementById("boton")
    boton.addEventListener("click", CambiarTexto)
}

main()