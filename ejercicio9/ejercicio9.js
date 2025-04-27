let botones =
[
    document.getElementById("boton1"),
    document.getElementById("boton2"),
    document.getElementById("boton3"),
    document.getElementById("boton4"),
    document.getElementById("boton5"),
    document.getElementById("boton6"),
    document.getElementById("boton7"),
    document.getElementById("boton8"),
    document.getElementById("boton9")
]
const lineas =
[
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]
let turno = "X"

let HayCampoVacio = function ()
{
    for (let boton of botones)
    {
        if (boton.innerText == "")
        {
            return true
        }
    }
    return false
}

let CambiarTurno = function()
{
    if (turno == "X")
    {
        turno = "O"
    }
    else
    {
        turno = "X"
    }
    return
}

let VerificarGanador = function()
{
    for (let linea of lineas)
    {
        if (botones[linea[0]].innerText != "" && botones[linea[0]].innerText == botones[linea[1]].innerText && botones[linea[1]].innerText == botones[linea[2]].innerText)
        {
            return botones[linea[0]].innerText
        }
    }
    return null
}

let SeleccionarBoton = function(posicion)
{
    if (botones[posicion].innerText == "")
    {
        botones[posicion].innerText = turno

        let ganador = VerificarGanador()
        if (ganador)
        {
            for (let boton of botones)
            {
                boton.disabled = true;
            }
            document.getElementById("texto").innerText = "Jugador " + ganador + " ganó"
        } else if (!HayCampoVacio())
        {
            for (let boton of botones)
            {
                boton.disabled = true;
            }
            document.getElementById("texto").innerText = "Empate"
        } else
        {
            CambiarTurno()
            document.getElementById("texto").innerText = "Turno del jugador " + turno
        }
    }
}

let main = function ()
{
    document.getElementById("texto").innerText = "Turno del jugador " + turno;
    
    for (let i = 0; i < botones.length; i++)
    {
        botones[i].addEventListener("click", function()
        {
            SeleccionarBoton(i);
        });
    }
}

main()