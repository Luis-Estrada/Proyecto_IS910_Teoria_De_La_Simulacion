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
    <script  type="text/javascript" src="../js/chart.min.js" charset="utf-8"></script>



    <title>Seleccion de rutas</title>
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
        <div class="cont_form center">
                <!-- // Use Morris.Bar-->
                <canvas id="myChart" width="400" height="230"></canvas>
                <?php
                  include_once("../pages/graficos.php");
                  ?>
        </div>
    </Div>
</body>

</html>
