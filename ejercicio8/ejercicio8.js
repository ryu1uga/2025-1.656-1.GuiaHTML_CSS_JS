let MostrarOcultarTexto = function()
{
    let texto = document.getElementById("texto")
    if (texto.hidden == false)
    {
        texto.hidden = true
    }
    else
    {
        texto.hidden = false
    }
}

let main = function()
{
    let boton = document.getElementById("boton")
    boton.addEventListener("click", MostrarOcultarTexto)
}

main()