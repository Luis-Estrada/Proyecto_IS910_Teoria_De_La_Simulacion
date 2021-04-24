
const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const llenarTabla = document.querySelector('#lista-tabla tbody');

btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, interes.value, tiempo.value);
})

function calcularCuota(monto, interes, tiempo){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');    

    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+interes/1200, tiempo)*interes/1200)/(Math.pow(1+interes/1200, tiempo)-1);

    for(let i = 1; i <= tiempo; i++) {

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
        llenarTabla.appendChild(row)
    }
}


/* Funcion para crear boton limpiar */
function crearBtnLimpiar(){
    $('#cntBtnLimpiar').html(
        '<div class="row">'+
            '<div class="col align-self-start"></div>'+
            '<div class="col align-self-center"></div>'+
            '<div class="col align-self-end">'+
            '<button class="btn btn_en btn-primary col-6" onclick="limpiar()" type="button" id="btnLimpiar" >Limpiar</button>'+
            '</div>'+
        '</div>'
    );
}



function limpiar() {
    document.getElementById("miForm").reset();
    calcularCuota();

    
  }


