<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.css">

    <!-- Css propios -->
    <link rel="stylesheet" href="../css/style.css">

    <!--Graficas  -->
    <script type="text/javascript" src="../js/datos_grafica.js" charset="utf-8"></script>
    <script  type="text/javascript" src="../js/chart.min.js" charset="utf-8"></script>


    <title>Beneficio total esperado</title>
</head>
<body>
    <Div class="contenedor ">
        <div>
            <div class="titulo_en center"><h1>Empresa de Transporte</h1></div>
            <div>
                <a href="../index.html">
                    <button class="btn btn_en btn-primary">Menú</button>
                </a>
                <button class="btn btn_en btn-primary">Ayuda</button>
            </div>
            <hr>
        </div>
        <div class="center row">
            <div class="col-4">
                <div class="items-form">
                    <label for="">Ingresos totales</label>
                    <hr>
                </div>
                <div class="items-form">
                    <input id="ingresos" type="text" class="col-6">
                </div>
            </div>
            <div class="col-4">
                <div class="items-form">
                    <label for="">Gastos totales invertidos</label>
                    <hr>
                </div>
                <div class="items-form">
                    <input id="gasto_variable" type="text" class="col-6">
                </div>
            </div>
            <div class="col-4">
                <div class="items-form">
                    <label for="">Beneficio total esperado</label>
                    <hr>
                </div>
                <div class="items-form">
                    <input id="beneficio" type="text" class="col-6">
                </div>
            </div>
            <div>
                <div class="cont_form center">
                        <!--Graficas-->
                        <canvas id="myChart" width="400" height="230"></canvas>
                        <?php
                          include_once("../pages/graficos.php");
                          ?>
                </div>
            </div>
            <!--<div class="button-form_be">
                <input class="btn btn_en btn-primary" type="button" value="Nuevo">
                <input class="btn btn_en btn-primary" type="button" value="Ver BT">
            </div>-->
        </div>
    </Div>
</body>
</html>
