let LimpiarBoton = function()
{
    let botones = document.getElementsByClassName("boton")
    for (let boton of botones)
    {
        boton.innerText = ""
    }
}

let TablaOpuesta = function(t)
{
    if (t == 1)
    {
        return 2
    }
    return 1
}

let SeleccionarBoton = function(t, x, y)
{
    LimpiarBoton()
    let botonSeleccionado1 = document.getElementById("t" + t + "_x" + x + "_y" + y)
    botonSeleccionado1.innerText = "X"
    let botonSeleccionado2 = document.getElementById("t" + TablaOpuesta(t) + "_x" + (9-x) + "_y" + (9-y))
    botonSeleccionado2.innerText = "X"

    if (x > 1)
    {
        let botonArriba1 = document.getElementById("t" + t + "_x" + (x-1) + "_y" + y)
        botonArriba1.innerText = "X"
        let botonArriba2 = document.getElementById("t" + TablaOpuesta(t) + "_x" + (10-x) + "_y" + (9-y))
        botonArriba2.innerText = "X"
    }
    if (x < 8)
    {
        let botonAbajo1 = document.getElementById("t" + t + "_x" + (x+1) + "_y" + y)
        botonAbajo1.innerText = "X"
        let botonAbajo2 = document.getElementById("t" + TablaOpuesta(t) + "_x" + (8-x) + "_y" + (9-y))
        botonAbajo2.innerText = "X"
    }
    if (y > 1)
    {
        let botonIzquierda1 = document.getElementById("t" + t + "_x" + x + "_y" + (y-1))
        botonIzquierda1.innerText = "X"
        let botonIzquierda2 = document.getElementById("t" + TablaOpuesta(t) + "_x" + (9-x) + "_y" + (10-y))
        botonIzquierda2.innerText = "X"
    }
    if (y < 8)
    {
        let botonDerecha1 = document.getElementById("t" + t + "_x" + x + "_y" + (y+1))
        botonDerecha1.innerText = "X"
        let botonDerecha2 = document.getElementById("t" + TablaOpuesta(t) + "_x" + (9-x) + "_y" + (8-y))
        botonDerecha2.innerText = "X"
    }

}

let main = function()
{
    for (let x = 1; x <= 8; x++)
    {
        for (let y = 1; y <= 8; y++)
        {
            let botonIzquierda = document.getElementById("t1_x" + x + "_y" + y)
            let botonDerecha = document.getElementById("t2_x" + x + "_y" + y)
            
            botonIzquierda.addEventListener("click", function() {SeleccionarBoton(1, x, y)})
            botonDerecha.addEventListener("click", function() {SeleccionarBoton(2, x, y)})
        }
    }
}

main()