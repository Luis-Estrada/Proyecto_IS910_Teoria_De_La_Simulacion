/*Variables de los distintos valores del formulario */
var monto = document.getElementById('monto');
var moneda = document.getElementById('moneda');
var tiempo = document.getElementById('tiempo');
var tipoTiempo = document.getElementById('tipoTiempo');
var interes = document.getElementById('interes');
var btnCalcular = document.getElementById('btnCalcular');
var llenarTabla = document.querySelector('#lista-tabla tbody');
const alerta = document.getElementById('alert-error');
var amortizacion = document.getElementById('amortizacion');
var dolar = 24.06; 


btnCalcular.addEventListener('click', () => {
    if (monto.value === '' || tiempo.value === '' || interes.value === '') {
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        }, 2000);
    } else {
        if (amortizacion.value =="frances"){
            calcularamortizacionFrancesa(monto.value,moneda.value, interes.value, tiempo.value, tipoTiempo.value);
        }else{
            calcularAmortizacionAlemana(monto.value,moneda.value, interes.value, tiempo.value, tipoTiempo.value);
        }
    }
})

function calcularamortizacionFrancesa(monto,moneda, interes, tiempo, tipoTiempo){
        console.log("Moneda: " + monto);
        console.log("monedad: " + moneda);
        console.log("interes: " + interes);
        console.log("tiempo: " + tiempo);
        console.log("tipo tiempo: " + tipoTiempo);
        
        while(llenarTabla.firstChild){
            llenarTabla.removeChild(llenarTabla.firstChild);
        }

        let fechas = [];
        let fechaActual = Date.now();
        let mes_actual = moment(fechaActual);
        let anio_actual = moment(fechaActual);
        mes_actual.add(1, 'month');    
        anio_actual.add(1,"year");


        let pagoInteres=0, pagoCapital = 0, cuota = 0;

        //converion a moneda 
        if (moneda =="dolar"){
            monto = monto / dolar;
        }

        if (tipoTiempo =="anios"){
            cuota = monto * (Math.pow(1+interes/1200, tiempo*12)*interes/1200)/(Math.pow(1+interes/1200, tiempo*12)-1);

        } else{
            cuota = monto * (Math.pow(1+interes/1200, tiempo)*interes/1200)/(Math.pow(1+interes/1200, tiempo)-1);
        }
        
 

        for(let i = 1; i <= tiempo; i++) {

            if (tipoTiempo =="anios"){
                pagoInteres = parseFloat(monto*(interes/1200))*12;
                pagoCapital = (cuota*12 - pagoInteres);
                monto = parseFloat(monto-pagoCapital);
                console.log("");
                console.log("cuota mensual: " + cuota);
                console.log("cuota anual: " + cuota*12);
                console.log("pagoInteres: " + pagoInteres);
                console.log("pagoCapital: " + pagoCapital);
                console.log("monto: " + monto);
                console.log("");

                fechas[i] = anio_actual.format('DD-MM-YYYY');
                anio_actual.add(1, 'year');

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${fechas[i]}</td>
                    <td>${(cuota*12).toFixed(2)}</td>
                    <td>${(pagoCapital).toFixed(2)}</td>
                    <td>${(pagoInteres).toFixed(2)}</td>
                    <td>${(monto).toFixed(2)}</td>
                `;
                llenarTabla.appendChild(row);

            } else{
                pagoInteres = parseFloat(monto*(interes/1200));
                pagoCapital = cuota - pagoInteres;
                monto = parseFloat(monto-pagoCapital);

                //Formato fechas
                fechas[i] = mes_actual.format('DD-MM-YYYY');
                mes_actual.add(1, 'month');

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${fechas[i]}</td>
                    <td>${cuota.toFixed(2)}</td>
                    <td>${pagoCapital.toFixed(2)}</td>
                    <td>${pagoInteres.toFixed(2)}</td>
                    <td>${monto.toFixed(2)}</td>
                `;
                llenarTabla.appendChild(row);
            }

        }
}


function calcularAmortizacionAlemana(monto,moneda, interes, tiempo, tipoTiempo) {
    console.log("Moneda: " + monto);
    console.log("monedad: " + moneda);
    console.log("interes: " + interes);
    console.log("tiempo: " + tiempo);
    console.log("tipo tiempo: " + tipoTiempo);

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }


    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    let anio_actual = moment(fechaActual);
    mes_actual.add(1, 'month');    
    anio_actual.add(1,"year");

       
    let amortizacionConstante=0, pagoInteres=0, cuota=0;

        //converion a moneda 
        if (moneda =="dolar"){
            monto = monto / dolar;
        }

        if (tipoTiempo =="anios"){
            amortizacionConstante = (monto / tiempo)/12;
        }else{
            amortizacionConstante = monto / tiempo;
        }
 

    for (let i = 1; i <= tiempo; i++) {
 
        if (tipoTiempo =="anios"){
                pagoInteres = parseFloat(monto*(interes/1200));
                fechas[i] = anio_actual.format('DD-MM-YYYY');
                anio_actual.add(1, 'year');
                cuota = amortizacionConstante*12 + pagoInteres*12;
                monto = monto - amortizacionConstante*12;
                console.log(" " );
                console.log("amortizacionConstante: " + amortizacionConstante);
                console.log("pagoInteres: " + pagoInteres);
                console.log("cuota: " + cuota);
                console.log("monto: " + monto);
                
        } else{
                pagoInteres = parseFloat(monto*(interes/1200));
                fechas[i] = mes_actual.format('DD-MM-YYYY');
                mes_actual.add(1, 'month');
                cuota = amortizacionConstante + pagoInteres;
                monto = monto - amortizacionConstante;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row);
    }
}

/* Funcion para limpiar los text  , restablecer la tabla */
function limpiar() {
    document.getElementById("miForm").reset();
    calcularamortizacionFrancesa();
    calcularAmortizacionAlemana();

  }


