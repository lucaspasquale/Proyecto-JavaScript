
let calcular = prompt("Que moneda queres calcular Dolares o Reales? Para Detener El Calculo (Detener)");

function dolarBlue() {
    const precioDolar = 498;
    let pesosUsuario = parseInt(prompt("Ingresá la cantidad de Pesos a convertir"))
    if (isNaN(pesosUsuario)) {
        alert("Ingresá un valor válido")
    } else {
        alert("Son $" + (pesosUsuario / precioDolar).toFixed(2) + " Dolar Blue")
    }
}
while (calcular != "detener") {
    switch (calcular.toUpperCase()) {
        case "DOLARES":
            alert("Ingesaste Dolares");
            dolarBlue()
            break;
        case "REALES":
            alert("Ingesaste Reales");
            let RealesBrasileros = 55
            let pesosUsuario2 = parseInt(prompt("Ingresá la cantidad de Pesos a convertir"))
            if (isNaN(pesosUsuario2)) {
                alert("Ingresá un valor válido")
            } else {
                alert("Son $" + (pesosUsuario2 / RealesBrasileros).toFixed(2) + " Reales Brasileros ")
            }
            break;
        default:
            alert("Escribí correctamente Dolares o Reales")
            break;
    }
    calcular = prompt("Que moneda queres calcular Dolares o Reales? Para Detener El Calculo (Detener)");
}
