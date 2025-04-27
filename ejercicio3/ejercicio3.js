let clicks = 0;

let ContarClick = function() {
    clicks++;
    let contador = document.getElementById("contador");
    if (clicks >= 10)
    {
        contador.style.color = "red"
    }
    contador.textContent = "Has hecho " + clicks + " clicks";
};

let main = function() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", ContarClick);
};

main();