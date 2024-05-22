<?php
require 'configDB.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$metodo = $_SERVER['REQUEST_METHOD'];
$tabla = isset($_GET['tabla']) ? $_GET['tabla'] : '';

switch ($tabla) {
    case 'productos':
        manejarTablaProductos($metodo, $con);
        break;
    case 'categorias':
        manejarTablaCategorias($metodo, $con);
        break;
    case 'proveedores':
        manejarTablaProveedores($metodo, $con);
        break;
    case 'compras':
        manejarTablaCompras($metodo, $con);
        break;
    case 'ventas':
        manejarTablaVentas($metodo, $con);
        break;
    case 'informes':
        manejarTablaInformes($metodo, $con);
        break;
    default:
        echo json_encode(array('error' => 'Tabla no especificada o no permitida'));
        break;
}

mysqli_close($con);

function manejarTablaProductos($metodo, $con) {
    $tabla = 'productos';

    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $query = "SELECT * FROM $tabla WHERE id = $id";
                $resultado = mysqli_query($con, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    $producto = mysqli_fetch_assoc($resultado);
                    echo json_encode($producto);
                } else {
                    echo json_encode(array('mensaje' => 'No se encontró ningún producto con el ID proporcionado'));
                }
            } else {
                $query = "SELECT * FROM $tabla ORDER BY id DESC";
                $resultado = mysqli_query($con, $query);
                $productos = array();
                while ($fila = mysqli_fetch_assoc($resultado)) {
                    $productos[] = $fila;
                }
                echo json_encode($productos);
            }
            break;

        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            // Validar y procesar los datos recibidos
            if (empty($data['NombreP']) || empty($data['Descripcion']) || empty($data['Precio']) || empty($data['Stock']) || empty($data['Categoria']) || empty($data['created_at']) || empty($data['updated_at'])) {
                echo json_encode(array('error' => 'Todos los campos son obligatorios'));
            } else {
                // Sanitizar y procesar los datos para evitar inyecciones SQL
                $NombreP = mysqli_real_escape_string($con, ucwords($data['NombreP']));
                $Descripcion = mysqli_real_escape_string($con, trim($data['Descripcion']));
                $Precio = mysqli_real_escape_string($con, trim($data['Precio']));
                $Stock = mysqli_real_escape_string($con, trim($data['Stock']));
                $Categoria = mysqli_real_escape_string($con, trim($data['Categoria']));
                $created_at = mysqli_real_escape_string($con, trim($data['created_at']));
                $updated_at = mysqli_real_escape_string($con, trim($data['updated_at']));
                
                $query = "INSERT INTO $tabla (NombreP, Descripcion, Precio, Stock, Categoria, created_at, updated_at) VALUES ('$NombreP', '$Descripcion', '$Precio', '$Stock', '$Categoria', '$created_at', '$updated_at')";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Nuevo producto creado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al crear producto: ' . mysqli_error($con)));
                }
            }
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            // Validar y procesar los datos recibidos
            if (empty($data['id']) || empty($data['NombreP']) || empty($data['Descripcion']) || empty($data['Precio']) || empty($data['Stock']) || empty($data['Categoria']) || empty($data['created_at']) || empty($data['updated_at'])) {
                echo json_encode(array('error' => 'Todos los campos son obligatorios'));
            } else {
                // Sanitizar y procesar los datos para evitar inyecciones SQL
                $id = mysqli_real_escape_string($con, $data['id']);
                $NombreP = mysqli_real_escape_string($con, ucwords($data['NombreP']));
                $Descripcion = mysqli_real_escape_string($con, trim($data['Descripcion']));
                $Precio = mysqli_real_escape_string($con, trim($data['Precio']));
                $Stock = mysqli_real_escape_string($con, trim($data['Stock']));
                $Categoria = mysqli_real_escape_string($con, trim($data['Categoria']));
                $created_at = mysqli_real_escape_string($con, trim($data['created_at']));
                $updated_at = mysqli_real_escape_string($con, trim($data['updated_at']));

                $query = "UPDATE $tabla SET NombreP='$NombreP', Descripcion='$Descripcion', Precio='$Precio', Stock='$Stock', Categoria='$Categoria', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Producto actualizado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al actualizar producto: ' . mysqli_error($con)));
                }
            }
            break;

        case 'DELETE':
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $query = "DELETE FROM $tabla WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Producto eliminado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al eliminar producto: ' . mysqli_error($con)));
                }
            } else {
                echo json_encode(array('error' => 'Se requiere el ID del producto a eliminar'));
            }
            break;

        default:
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
}

function manejarTablaCategorias($metodo, $con) {
    $tabla = 'categorias';

    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $id = mysqli_real_escape_string($con, $_GET['id']);
                $query = "SELECT * FROM $tabla WHERE id = $id";
                $resultado = mysqli_query($con, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    $categoria = mysqli_fetch_assoc($resultado);
                    echo json_encode($categoria);
                } else {
                    echo json_encode(array('mensaje' => 'No se encontró ninguna categoría con el ID proporcionado'));
                }
            } else {
                $query = "SELECT * FROM $tabla ORDER BY id DESC";
                $resultado = mysqli_query($con, $query);
                $categorias = array();
                while ($fila = mysqli_fetch_assoc($resultado)) {
                    $categorias[] = $fila;
                }
                echo json_encode($categorias);
            }
            break;

        case 'POST':
            $N_categoria = ucwords($_POST['N_categoria']);
            $created_at = trim($_POST['created_at']);
            $updated_at = trim($_POST['updated_at']);
            if (isset($_POST['id'])) {
                $id = trim($_POST['id']);
                $query = "UPDATE $tabla SET N_categoria='$N_categoria', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Categoría actualizada correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al actualizar categoría: ' . mysqli_error($con)));
                }
            } else {
                $query = "INSERT INTO $tabla (N_categoria, created_at, updated_at) VALUES ('$N_categoria', '$created_at', '$updated_at')";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Nueva categoría creada correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al crear categoría: ' . mysqli_error($con)));
                }
            }
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'];
            $N_categoria = ucwords($data['N_categoria']);
            $created_at = trim($data['created_at']);
            $updated_at = trim($data['updated_at']);
            $query = "UPDATE $tabla SET N_categoria='$N_categoria', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
            if (mysqli_query($con, $query)) {
                echo json_encode(array('message' => 'Categoría actualizada correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al actualizar categoría: ' . mysqli_error($con)));
            }
            break;

        case 'DELETE':
            $id = $_GET['id'];
            $deleteQuery = "DELETE FROM $tabla WHERE id=$id";
            if (mysqli_query($con, $deleteQuery)) {
                echo json_encode(array('message' => 'Categoría eliminada correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al eliminar categoría: ' . mysqli_error($con)));
            }
            break;

        default:
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
}

function manejarTablaProveedores($metodo, $con) {
    $tabla = 'proveedores';

    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $id = mysqli_real_escape_string($con, $_GET['id']);
                $query = "SELECT * FROM $tabla WHERE id = $id";
                $resultado = mysqli_query($con, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    $proveedor = mysqli_fetch_assoc($resultado);
                    echo json_encode($proveedor);
                } else {
                    echo json_encode(array('mensaje' => 'No se encontró ningún proveedor con el ID proporcionado'));
                }
            } else {
                $query = "SELECT * FROM $tabla ORDER BY id DESC";
                $resultado = mysqli_query($con, $query);
                $proveedores = array();
                while ($fila = mysqli_fetch_assoc($resultado)) {
                    $proveedores[] = $fila;
                }
                echo json_encode($proveedores);
            }
            break;

        case 'POST':
            $Nombre = ucwords($_POST['Nombre']);
            $telefono = trim($_POST['telefono']);
            $Direccion = trim($_POST['Direccion']);
            $Correo = trim($_POST['Correo']);
            $created_at = trim($_POST['created_at']);
            $updated_at = trim($_POST['updated_at']);
            if (isset($_POST['id'])) {
                $id = trim($_POST['id']);
                $query = "UPDATE $tabla SET Nombre='$Nombre', telefono='$telefono', Direccion='$Direccion', Correo='$Correo', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Proveedor actualizado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al actualizar proveedor: ' . mysqli_error($con)));
                }
            } else {
                $query = "INSERT INTO $tabla (Nombre, telefono, Direccion, Correo, created_at, updated_at) VALUES ('$Nombre', '$telefono', '$Direccion', '$Correo', '$created_at', '$updated_at')";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Nuevo proveedor creado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al crear proveedor: ' . mysqli_error($con)));
                }
            }
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'];
            $Nombre = ucwords($data['Nombre']);
            $telefono = trim($data['telefono']);
            $Direccion = trim($data['Direccion']);
            $Correo = trim($data['Correo']);
            $created_at = trim($data['created_at']);
            $updated_at = trim($data['updated_at']);
            $query = "UPDATE $tabla SET Nombre='$Nombre', telefono='$telefono', Direccion='$Direccion', Correo='$Correo', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
            if (mysqli_query($con, $query)) {
                echo json_encode(array('message' => 'Proveedor actualizado correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al actualizar proveedor: ' . mysqli_error($con)));
            }
            break;

        case 'DELETE':
            $id = $_GET['id'];
            $deleteQuery = "DELETE FROM $tabla WHERE id=$id";
            if (mysqli_query($con, $deleteQuery)) {
                echo json_encode(array('message' => 'Proveedor eliminado correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al eliminar proveedor: ' . mysqli_error($con)));
            }
            break;

        default:
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
}

function manejarTablaCompras($metodo, $con) {
    $tabla = 'compras';

    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $id = mysqli_real_escape_string($con, $_GET['id']);
                $query = "SELECT * FROM $tabla WHERE id = $id";
                $resultado = mysqli_query($con, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    $compra = mysqli_fetch_assoc($resultado);
                    echo json_encode($compra);
                } else {
                    echo json_encode(array('mensaje' => 'No se encontró ninguna compra con el ID proporcionado'));
                }
            } else {
                $query = "SELECT * FROM $tabla ORDER BY id DESC";
                $resultado = mysqli_query($con, $query);
                $compras = array();
                while ($fila = mysqli_fetch_assoc($resultado)) {
                    $compras[] = $fila;
                }
                echo json_encode($compras);
            }
            break;

        case 'POST':
            $C_Compra = trim($_POST['C_Compra']);
            $V_Compra = trim($_POST['V_Compra']);
            $F_Compra = trim($_POST['F_Compra']);
            $created_at = trim($_POST['created_at']);
            $updated_at = trim($_POST['updated_at']);
            if (isset($_POST['id'])) {
                $id = trim($_POST['id']);
                $query = "UPDATE $tabla SET C_Compra='$C_Compra', V_Compra='$V_Compra', F_Compra='$F_Compra', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Compra actualizada correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al actualizar compra: ' . mysqli_error($con)));
                }
            } else {
                $query = "INSERT INTO $tabla (C_Compra, V_Compra, F_Compra, created_at, updated_at) VALUES ('$C_Compra', '$V_Compra', '$F_Compra', '$created_at', '$updated_at')";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Nueva compra creada correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al crear compra: ' . mysqli_error($con)));
                }
            }
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'];
            $C_Compra = trim($data['C_Compra']);
            $V_Compra = trim($data['V_Compra']);
            $F_Compra = trim($data['F_Compra']);
            $created_at = trim($data['created_at']);
            $updated_at = trim($data['updated_at']);
            $query = "UPDATE $tabla SET C_Compra='$C_Compra', V_Compra='$V_Compra', F_Compra='$F_Compra', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
            if (mysqli_query($con, $query)) {
                echo json_encode(array('message' => 'Compra actualizada correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al actualizar compra: ' . mysqli_error($con)));
            }
            break;

        case 'DELETE':
            $id = $_GET['id'];
            $deleteQuery = "DELETE FROM $tabla WHERE id=$id";
            if (mysqli_query($con, $deleteQuery)) {
                echo json_encode(array('message' => 'Compra eliminada correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al eliminar compra: ' . mysqli_error($con)));
            }
            break;

        default:
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
}

function manejarTablaVentas($metodo, $con) {
    $tabla = 'ventas';

    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $id = mysqli_real_escape_string($con, $_GET['id']);
                $query = "SELECT * FROM $tabla WHERE id = $id";
                $resultado = mysqli_query($con, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    $venta = mysqli_fetch_assoc($resultado);
                    echo json_encode($venta);
                } else {
                    echo json_encode(array('mensaje' => 'No se encontró ninguna venta con el ID proporcionado'));
                }
            } else {
                $query = "SELECT * FROM $tabla ORDER BY id DESC";
                $resultado = mysqli_query($con, $query);
                $ventas = array();
                while ($fila = mysqli_fetch_assoc($resultado)) {
                    $ventas[] = $fila;
                }
                echo json_encode($ventas);
            }
            break;

        case 'POST':
            $C_Venta = trim($_POST['C_Venta']);
            $V_Venta = trim($_POST['V_Venta']);
            $F_Venta = trim($_POST['F_Venta']);
            $created_at = trim($_POST['created_at']);
            $updated_at = trim($_POST['updated_at']);
            if (isset($_POST['id'])) {
                $id = trim($_POST['id']);
                $query = "UPDATE $tabla SET C_Venta='$C_Venta', V_Venta='$V_Venta', F_Venta='$F_Venta', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Venta actualizada correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al actualizar venta: ' . mysqli_error($con)));
                }
            } else {
                $query = "INSERT INTO $tabla (C_Venta, V_Venta, F_Venta, created_at, updated_at) VALUES ('$C_Venta', '$V_Venta', '$F_Venta', '$created_at', '$updated_at')";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Nueva venta creada correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al crear venta: ' . mysqli_error($con)));
                }
            }
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'];
            $C_Venta = trim($data['C_Venta']);
            $V_Venta = trim($data['V_Venta']);
            $F_Venta = trim($data['F_Venta']);
            $created_at = trim($data['created_at']);
            $updated_at = trim($data['updated_at']);
            $query = "UPDATE $tabla SET C_Venta='$C_Venta', V_Venta='$V_Venta', F_Venta='$F_Venta', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
            if (mysqli_query($con, $query)) {
                echo json_encode(array('message' => 'Venta actualizada correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al actualizar venta: ' . mysqli_error($con)));
            }
            break;

        case 'DELETE':
            $id = $_GET['id'];
            $deleteQuery = "DELETE FROM $tabla WHERE id=$id";
            if (mysqli_query($con, $deleteQuery)) {
                echo json_encode(array('message' => 'Venta eliminada correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al eliminar venta: ' . mysqli_error($con)));
            }
            break;

        default:
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
}

function manejarTablaInformes($metodo, $con) {
    $tabla = 'informes';

    switch ($metodo) {
        case 'GET':
            if (isset($_GET['id'])) {
                $id = mysqli_real_escape_string($con, $_GET['id']);
                $query = "SELECT * FROM $tabla WHERE id = $id";
                $resultado = mysqli_query($con, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    $informe = mysqli_fetch_assoc($resultado);
                    echo json_encode($informe);
                } else {
                    echo json_encode(array('mensaje' => 'No se encontró ningún informe con el ID proporcionado'));
                }
            } else {
                $query = "SELECT * FROM $tabla ORDER BY id DESC";
                $resultado = mysqli_query($con, $query);
                $informes = array();
                while ($fila = mysqli_fetch_assoc($resultado)) {
                    $informes[] = $fila;
                }
                echo json_encode($informes);
            }
            break;

        case 'POST':
            $Tipo = trim($_POST['Tipo']);
            $Fecha_I = trim($_POST['Fecha_I']);
            $created_at = trim($_POST['created_at']);
            $updated_at = trim($_POST['updated_at']);
            if (isset($_POST['id'])) {
                $id = trim($_POST['id']);
                $query = "UPDATE $tabla SET Tipo='$Tipo', Fecha_I='$Fecha_I', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Informe actualizado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al actualizar informe: ' . mysqli_error($con)));
                }
            } else {
                $query = "INSERT INTO $tabla (Tipo, Fecha_I, created_at, updated_at) VALUES ('$Tipo', '$Fecha_I', '$created_at', '$updated_at')";
                if (mysqli_query($con, $query)) {
                    echo json_encode(array('message' => 'Nuevo informe creado correctamente'));
                } else {
                    echo json_encode(array('error' => 'Error al crear informe: ' . mysqli_error($con)));
                }
            }
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'];
            $Tipo = trim($data['Tipo']);
            $Fecha_I = trim($data['Fecha_I']);
            $created_at = trim($data['created_at']);
            $updated_at = trim($data['updated_at']);
            $query = "UPDATE $tabla SET Tipo='$Tipo', Fecha_I='$Fecha_I', created_at='$created_at', updated_at='$updated_at' WHERE id=$id";
            if (mysqli_query($con, $query)) {
                echo json_encode(array('message' => 'Informe actualizado correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al actualizar informe: ' . mysqli_error($con)));
            }
            break;

        case 'DELETE':
            $id = $_GET['id'];
            $deleteQuery = "DELETE FROM $tabla WHERE id=$id";
            if (mysqli_query($con, $deleteQuery)) {
                echo json_encode(array('message' => 'Informe eliminado correctamente'));
            } else {
                echo json_encode(array('error' => 'Error al eliminar informe: ' . mysqli_error($con)));
            }
            break;

        default:
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
}
?>
