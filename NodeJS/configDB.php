<?php
$host = 'localhost'; // Dirección del servidor de base de datos
$db = 'sgi'; // Nombre de tu base de datos
$user = 'root'; // Usuario de la base de datos (cambia 'root' si es diferente)
$pass = '1014176019_m'; // Contraseña de la base de datos (cambia '' si tienes una contraseña)

$con = new mysqli($host, $user, $pass, $db);

if ($con->connect_error) {
    die('La conexión a la base de datos falló: ' . $con->connect_error);
}
?>
