<?php
            if ($_POST){
                $ruta =$_POST["ruta"];
                $primeraclase=$_POST["primeraclase"];
                $normal=$_POST["normal"];
                $niños=$_POST["niños"];
                $terceraedad=$_POST["terceraedad"];
            }else{
                echo    "Error no se envio los datos. ";
            }


            almacenamiento2($ruta,$primeraclase,$normal,$niños,$terceraedad);


                        function almacenamiento2 ($ruta,$primeraclase,$normal,$niños,$terceraedad){
                            print( "
                            <script>
                            var ctx = document.getElementById('myChart').getContext('2d');
                            var myChart = new Chart(ctx, {
                                type: 'bar',
                                data: {
                                    labels: ['Primera Clase','Normal','Niños','Tercera Edad'],
                                    datasets: [{
                                        label: '$ruta',
                                        data: [$primeraclase,$normal,$niños,$terceraedad],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)'
                                        ],
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    scales: {
                                        y: {
                                            beginAtZero: true
                                        }
                                    }
                                }
                            });
                            </script>
                            ");
                          }
            ?>
