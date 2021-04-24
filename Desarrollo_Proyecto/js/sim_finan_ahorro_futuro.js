$(document).ready(function(){
    //Variables
    var capital_inicial = $('#cap_inicial');
    var moneda          = $('#moneda');
    var plazo           = $('#plazo'); 
    var tiempo          = $('#tiempo');
    var tasaOccidente; 
    var tasaFicohsa;
    var tasaBanpais;
    var tasaElga;
    var interesOccidente;
    var interesFicohsa;
    var interesBanpais;
    var interesElga;
    var futuroOccidente;
    var futuroFicohsa;
    var futuroBanpais;
    var futuroElga;


    //Boton de interes simple
    $('#iSimple').on('click', function(){

        if (capital_inicial.val() == "" || plazo.val() == "") { 
            alert('Ingrese los datos solicitados correctamente'); 
        } else {

            //Deshabilitar inputs y selects
            $('input').prop('disabled', true);
            $('select').prop('disabled', true);

            //Tasa de cada banco
            tasaOccidente = inaOccidente(parseFloat(capital_inicial.val()), moneda.val());
            tasaFicohsa   = inaFicohsa(parseFloat(capital_inicial.val()), moneda.val());
            tasaBanpais   = inaBanpais(parseFloat(capital_inicial.val()), moneda.val());
            tasaElga      = inaElga(parseFloat(capital_inicial.val()), moneda.val());

            //Interes simple de cada banco
            interesOccidente = calInteresSimple(capital_inicial.val(), tasaOccidente, plazo.val(), tiempo.val());
            interesFicohsa   = calInteresSimple(capital_inicial.val(), tasaFicohsa, plazo.val(), tiempo.val());
            interesBanpais   = calInteresSimple(capital_inicial.val(), tasaBanpais, plazo.val(), tiempo.val());
            interesElga      = calInteresSimple(capital_inicial.val(), tasaElga, plazo.val(), tiempo.val());

            //Valores futuros
            futuroOccidente = (parseFloat(capital_inicial.val()) + interesOccidente).toFixed(2);
            futuroFicohsa   = (parseFloat(capital_inicial.val()) + interesFicohsa).toFixed(2);
            futuroBanpais   = (parseFloat(capital_inicial.val()) + interesBanpais).toFixed(2);
            futuroElga      = (parseFloat(capital_inicial.val()) + interesElga).toFixed(2);

            //Funciones para agregar HTML
            crearTblComparativa(capital_inicial.val(), tasaOccidente, tasaFicohsa, tasaBanpais, tasaElga, 
                                interesOccidente, interesFicohsa, interesBanpais, interesElga, futuroOccidente,
                                futuroFicohsa, futuroBanpais, futuroElga);

            crearGrfComparativa(tasaOccidente, tasaFicohsa, tasaBanpais, tasaElga);
            crearBtnLimpiar();
        }
    });

    //Boton de interes compuesto
    $('#iCompuesto').on('click', function(){
        if (capital_inicial.val() == "" || plazo.val() == "") { 
            alert('Ingrese los datos solicitados correctamente'); 
        } else {

            //Deshabilitar inputs y selects
            $('input').prop('disabled', true);
            $('select').prop('disabled', true);

            //Tasa de cada banco
            tasaOccidente = inaOccidente(parseFloat(capital_inicial.val()), moneda.val());
            tasaFicohsa   = inaFicohsa(parseFloat(capital_inicial.val()), moneda.val());
            tasaBanpais   = inaBanpais(parseFloat(capital_inicial.val()), moneda.val());
            tasaElga      = inaElga(parseFloat(capital_inicial.val()), moneda.val());

            //Interes simple de cada banco
            interesOccidente = calInteresCompuesto(capital_inicial.val(), tasaOccidente, plazo.val(), tiempo.val());
            interesFicohsa   = calInteresCompuesto(capital_inicial.val(), tasaFicohsa, plazo.val(), tiempo.val());
            interesBanpais   = calInteresCompuesto(capital_inicial.val(), tasaBanpais, plazo.val(), tiempo.val());
            interesElga      = calInteresCompuesto(capital_inicial.val(), tasaElga, plazo.val(), tiempo.val());

            //Valores futuros
            futuroOccidente = (parseFloat(capital_inicial.val()) + interesOccidente).toFixed(2);
            futuroFicohsa   = (parseFloat(capital_inicial.val()) + interesFicohsa).toFixed(2);
            futuroBanpais   = (parseFloat(capital_inicial.val()) + interesBanpais).toFixed(2);
            futuroElga      = (parseFloat(capital_inicial.val()) + interesElga).toFixed(2);

            //Funciones para agregar HTML
            crearTblComparativa(capital_inicial.val(), tasaOccidente, tasaFicohsa, tasaBanpais, tasaElga, 
                                interesOccidente, interesFicohsa, interesBanpais, interesElga, futuroOccidente,
                                futuroFicohsa, futuroBanpais, futuroElga);

            crearGrfComparativa(tasaOccidente, tasaFicohsa, tasaBanpais, tasaElga);
            crearBtnLimpiar();
        }
    });
});

/* Funciones para crear HTML --------------------------------------------------------------------------------------------------*/
/* Funcion para crear la tabla comparativa */
function crearTblComparativa(
    capInicial, 
    tasaOccidente, 
    tasaFicohsa, 
    tasaBanpais, 
    tasaElga, 
    interesOccidente, 
    interesFicohsa,
    interesBanpais,
    interesElga,
    futuroOccidente,
    futuroFicohsa,
    futuroBanpais,
    futuroElga
    ){
    $('#tbComparativa').html(
        '<div class="items-form">'+
            '<label for="">Tabla Comparativa</label>'+
            '<hr>'+
        '</div>'+
        '<br>'+
        '<div class="">'+
            '<!-- Datos de ejemplo-->'+
            '<table class="table">'+
                '<thead>'+
                    '<tr>'+
                    '<th scope="col">Banco</th>'+
                    '<th scope="col">Capital Inicial</th>'+
                    '<th scope="col">Tasa</th>'+
                    '<th scope="col">Interés acumulado</th>'+
                    '<th scope="col">Valor Futuro</th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>'+
                    '<tr>'+
                    '<td>OCCIDENTE</td>'+
                    '<td>'+ capInicial +'</td>'+
                    '<td>'+ tasaOccidente +'%</td>'+
                    '<td>'+ interesOccidente +'</td>'+
                    '<td>'+ futuroOccidente +'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>FICOHSA</td>'+
                    '<td>'+ capInicial +'</td>'+
                    '<td>'+ tasaFicohsa +'%</td>'+
                    '<td>'+ interesFicohsa +'</td>'+
                    '<td>'+ futuroFicohsa +'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>BANPAIS</td>'+
                    '<td>'+ capInicial +'</td>'+
                    '<td>'+ tasaBanpais +'%</td>'+
                    '<td>'+ interesBanpais +'</td>'+
                    '<td>'+ futuroBanpais +'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>COOP. ELGA</td>'+
                    '<td>'+ capInicial +'</td>'+
                    '<td>'+ tasaElga +'%</td>'+
                    '<td>'+ interesElga +'</td>'+
                    '<td>'+ futuroElga +'</td>'+
                    '</tr>'+
                '</tbody>'+
                '</table>'+
        '</div>'+
    '</br>'
    );
}

/* Funcion para crear la grafica comparativa */
function crearGrfComparativa(tasaOccidente, tasaFicohsa, tasaBanpais, tasaElga){
    $('#gfComparativa').html(
        '<h6>Gráfica Comparativa</h6>'+
        '<div class="bar-chart">'+
            '<!-- legend label -->'+
            '<div class="legend">'+
                '<div class="label">'+
                    '<h4>'+ 2 +'%</h4>'+
                '</div>'+
                '<div class="label">'+
                    '<h4>'+ 5 + '%</h4>'+
                '</div>'+
                '<div class="label">'+
                    '<h4>'+ 7 +'%</h4>'+
                '</div>'+
                '<div class="label last">'+
                    '<h4>'+ 10 +'%</h4>'+
                '</div>'+
            '</div>'+
            '<!-- bars -->'+
            '<div class="chart clearfix">'+
                '<small>Banco Occidente</small>'+
                '<div class="item">'+
                    '<div class="bar">'+
                        '<span class="percent">'+ tasaOccidente +'%</span>'+
                        
                        '<div class="progress" data-percent="'+ tasaOccidente +'">'+
                            '<span class="title">OCCIDENTE</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                
                '<small>Banco Ficohsa</small>'+
                '<div class="item">'+
                    '<div class="bar">'+
                        '<span class="percent">'+ tasaFicohsa +'%</span>'+
        
                        '<div class="progress" data-percent="'+ tasaFicohsa +'">'+
                            '<span class="title">FICOHSA</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                
                '<small>Banco BanPais</small>'+
                '<div class="item">'+
                    '<div class="bar">'+
                        '<span class="percent">'+ tasaBanpais +'%</span>'+
        
                        '<div class="progress" data-percent="'+ tasaBanpais +'">'+
                            '<span class="title">BANPAIS</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<small>Coop. Elga</small>'+
                '<div class="item">'+
                    '<div class="bar">'+
                        '<span class="percent">'+ tasaElga +'%</span>'+
        
                        '<div class="progress" data-percent="'+ tasaElga +'">'+
                            '<span class="title">COOP. ELGA</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );

    barChart();
            
    $(window).resize(function(){
        barChart();
    });
    
    function barChart(){
        $('.bar-chart').find('.progress').each(function(){
            var itemProgress = $(this),
            itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 10);
            itemProgress.css('width', itemProgressWidth);
        });
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

/*----------------------------------------- Funciones  ---------------------------------*/

//Funcion limpiar --------------------------------------------------------------------------------------------------
function limpiar(){
    //Limpiar los inputs y reiniciar selects
    $('input').val('');
    $('#moneda').val('lempira');
    $('#tiempo').val('anio');

    //Habilitar inputs y selects
    $('input').prop('disabled', false);
    $('select').prop('disabled', false);

    //Eliminar elementos
    $('#tbComparativa').html('');
    $('#gfComparativa').html('');
    $('#cntBtnLimpiar').html('');
}

// tasa ina = interes nominal anual || Aqui se manda en % 
// Funcion inaOccidente --------------------------------------------------------------------------------------------------
function inaOccidente(capInicial, moneda){
    var tasa = 0;
    if (moneda == 'lempira') {
        if (capInicial >= 0.01 && capInicial <= 700) {
            tasa = 0.00;
        } else if (capInicial >= 700.01 && capInicial <= 10000) {
            tasa = 1.50;
        } else if (capInicial >= 10000.01 && capInicial <= 50000) {
            tasa = 1.75;
        } else if (capInicial >= 50000.01 && capInicial <= 100000) {
            tasa = 2.00;
        } else if (capInicial >= 100000.01 && capInicial <= 200000) {
            tasa = 2.50;
        } else if (capInicial >= 200000.01 && capInicial <= 500000) {
            tasa = 2.75;
        } else if (capInicial >= 500000.01 && capInicial <= 1000000){
            tasa = 3.50;
        }else if (capInicial >= 1000000.01 && capInicial <= 2000000) {
            tasa = 3.75;
        } else if (capInicial >= 2000000.01){
            tasa = 4.00;
        } else {
            tasa = 0.00;
        }

    } else if (moneda == 'dolar') {
        if (capInicial >= 0.01 && capInicial <= 750) {
            tasa = 0.00;
        } else if (capInicial >= 750.01 && capInicial <= 1000) {
            tasa = 0.25;
        } else if (capInicial >= 1000.01 && capInicial <= 2000) {
            tasa = 0.40;
        } else if (capInicial >= 2000.01 && capInicial <= 10000) {
            tasa = 0.45;
        } else if (capInicial >= 10000.01 && capInicial <= 25000) {
            tasa = 0.60;
        } else if (capInicial >= 25000.01 && capInicial <= 50000) {
            tasa = 0.85;
        } else if (capInicial >= 50000.01 && capInicial <= 150000){
            tasa = 1.25;
        }else if (capInicial >= 150000.01 && capInicial <= 200000) {
            tasa = 1.50;
        } else if (capInicial >= 200000.01){
            tasa = 2.00;
        } else {
            tasa = 0.00;
        }
    }

    return tasa;
}

// Funcion inaFicohsa --------------------------------------------------------------------------------------------------
function inaFicohsa(capInicial, moneda){
    var tasa = 0;
    if (moneda == 'lempira') {
        if (capInicial >= 0.00 && capInicial <= 999.99) {
            tasa = 0.00;
        } else if (capInicial >= 1000 && capInicial <= 9999.99) {
            tasa = 0.50;
        } else if (capInicial >= 10000 && capInicial <= 24999.99) {
            tasa = 0.75;
        } else if (capInicial >= 25000 && capInicial <= 49999.99) {
            tasa = 1.25;
        } else if (capInicial >= 50000 && capInicial <= 99999.99) {
            tasa = 1.25;
        } else if (capInicial >= 100000 && capInicial <= 249999.99) {
            tasa = 1.50;
        } else if (capInicial >= 250000 && capInicial <= 499999.99){
            tasa = 2.50;
        }else if (capInicial >= 500000 && capInicial <= 999999.99) {
            tasa = 3.00;
        } else if (capInicial >= 1000000  && capInicial <= 1999999.99){
            tasa = 4.00;
        }else if (capInicial >= 2000000) {
            tasa = 4.25;
        } else {
            tasa = 0.00;
        }

    } else if (moneda == 'dolar') {
        if (capInicial >= 0.00 && capInicial <= 99.99) {
            tasa = 0.00;
        } else if (capInicial >= 100 && capInicial <= 1999.99) {
            tasa = 0.25;
        } else if (capInicial >= 2000 && capInicial <= 4999.99) {
            tasa = 0.50;
        } else if (capInicial >= 5000 && capInicial <= 9999.99) {
            tasa = 0.50;
        } else if (capInicial >= 10000 && capInicial <= 24999.99) {
            tasa = 0.75;
        } else if (capInicial >= 25000 && capInicial <= 49999.99) {
            tasa = 1.00;
        } else if (capInicial >= 50000 && capInicial <= 99999.99){
            tasa = 1.50;
        }else if (capInicial >= 100000 && capInicial <= 249999.99) {
            tasa = 1.75;
        } else if (capInicial >= 250000){
            tasa = 2.00;
        }else {
            tasa = 0.00;
        }
    }

    return tasa;
}

// Funcion inaBanpais --------------------------------------------------------------------------------------------------
function inaBanpais(capInicial, moneda){
    var tasa = 0;
    if (moneda == 'lempira') {
        if (capInicial >= 0.00 && capInicial <= 500) {
            tasa = 0.00;
        } else if (capInicial >= 500.01 && capInicial <= 10000) {
            tasa = 1.50;
        } else if (capInicial >= 10000.01 && capInicial <= 50000) {
            tasa = 2.00
        } else if (capInicial >= 50000.01 && capInicial <= 100000) {
            tasa = 2.25;
        } else if (capInicial >= 100000.01 && capInicial <= 200000) {
            tasa = 2.50;
        } else if (capInicial >= 200000.01 && capInicial <= 500000) {
            tasa = 2.75;
        } else if (capInicial >= 500000.01 && capInicial <= 5000000){
            tasa = 3.00;
        }else if (capInicial >= 5000000.01) {
            tasa = 0.50
        } else {
            tasa = 0.00;
        }

    } else if (moneda == 'dolar') {
        if (capInicial >= 0.00 && capInicial <= 100) {
            tasa = 0.00;
        } else if (capInicial >= 100.01 && capInicial <= 500) {
            tasa = 0.25;
        } else if (capInicial >= 500.01 && capInicial <= 1000) {
            tasa = 0.50;
        } else if (capInicial >= 1000.01 && capInicial <= 5000) {
            tasa = 0.75;
        } else if (capInicial >= 5000.01 && capInicial <= 25000) {
            tasa = 1.00;
        } else if (capInicial >= 25000.01 && capInicial <= 50000) {
            tasa = 1.25;
        } else if (capInicial >= 50000.01 && capInicial <= 100000){
            tasa = 1.75;
        }else if (capInicial >= 100000.01) {
            tasa = 2.00;
        } else {
            tasa = 0.00;
        }
    }

    return tasa;
}

// Funcion inaElga --------------------------------------------------------------------------------------------------
function inaElga(capInicial, moneda){
    var tasa = 0;
    if (moneda == 'lempira') {
        if (capInicial >= 0.00 && capInicial <= 360) {
            tasa = 0.00;
        } else if (capInicial >= 360.01 && capInicial <= 5000) {
            tasa = 4.25
        } else if (capInicial >= 5000.01 && capInicial <= 25000) {
            tasa = 4.25
        } else if (capInicial >= 25000.01 && capInicial <= 50000) {
            tasa = 4.75
        } else if (capInicial >= 50000.01 && capInicial <= 100000) {
            tasa = 5.00
        } else if (capInicial >= 100000.01 && capInicial <= 200000) {
            tasa = 5.50
        } else if (capInicial >= 200000.01){
            tasa = 6.00;
        }else{
            tasa = 0.00;
        }

    } else if (moneda = 'dolar') {
        if (capInicial >= 0.00 && capInicial <= 50) {
            tasa = 0.00;
        } else if (capInicial >= 50.01 && capInicial <= 500) {
            tasa = 0.10;
        } else if (capInicial >= 500.01 && capInicial <= 1000) {
            tasa = 0.25;
        } else if (capInicial >= 1000.01 && capInicial <= 5000) {
            tasa = 0.50;
        } else if (capInicial >= 5000.01 && capInicial <= 10000) {
            tasa = 0.75;
        } else if (capInicial >= 10000.01) {
            tasa = 1.00;
        } else {
            tasa = 0.00;
        }
    }

    return tasa;
}

// Funcion calInteresSimple --------------------------------------------------------------------------------------------------
function calInteresSimple(capInicial, tasa, plazo, tiempo){
    var interes = 0;
    if (tiempo == 'anio'){
        interes = capInicial * (tasa/100) * plazo;
    }else if (tiempo == 'meses'){
        interes = capInicial * ((tasa/100)/12) * plazo;
    }else {
        interes = 0;
    }

    return parseFloat(interes.toFixed(2));
}

// Funcion calInteresCompuesto --------------------------------------------------------------------------------------------------
function calInteresCompuesto(capInicial, tasa, plazo, tiempo){
    var interes = 0;
    if (tiempo == 'anio'){
        
        interes = (capInicial * ((1 + (tasa/100)) ** plazo)) - capInicial;
    }else if (tiempo == 'meses'){
        interes = (capInicial * ((1 + (tasa/100)/12) ** plazo)) - capInicial;
    }else {
        interes = 0;
    }

    return parseFloat(interes.toFixed(2));
}

/**/