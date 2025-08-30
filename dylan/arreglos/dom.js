document.getElementById("boton").addEventListener("click", () => {
    document.getElementById("parrafo") .innerText ="¡Texto cambiado!";
})
document.getElementById("entrada").addEventListener("input", (e) => {
    document.getElementById("parrafo") .innerText = e.target.value;
})
document.getElementById("boton").addEventListener("mouseover", () => {
    document.getElementById("boton").style.backgroundColor = "lightblue";
})
document.getElementById("boton").addEventListener("mouseout", () => {
    document.getElementById("boton").style.backgroundColor ="";
})