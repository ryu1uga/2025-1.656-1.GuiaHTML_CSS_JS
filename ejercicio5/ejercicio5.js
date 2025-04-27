let CambiarColorFondo = function()
{
    let texto = document.getElementById("texto")
    texto.style.backgroundColor = "blue"
}

let main = function()
{
    let boton = document.getElementById("boton")
    boton.addEventListener("click", CambiarColorFondo)
}

main()