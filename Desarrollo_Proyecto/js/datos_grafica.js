
guardar_localstorage();

function guardar_localstorage (){


    lef datosEncontrados = {
        ruta : "Ruta",
        primeraclase: 15,
        normal: 25,
        ninos: 4,
        terceraedad: 1,
        ingresototales: 1500,
        gastostotales: 5000,
        beneficiototal: 10000
    };

    lef ruta: "Hola";

    //localStorage.setItem("ruta", JSON.stringify(datosEncontrados));
    localStorage.setItem("Ruta", ruta);

}
