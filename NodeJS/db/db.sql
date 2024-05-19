USE sgi;

-- Crear la tabla productos
CREATE TABLE productos (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    NombreP VARCHAR(255) NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    Precio INT NOT NULL,
    Stock INT NOT NULL,
    Categoria VARCHAR (255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

-- Crear la tabla proveedores
CREATE TABLE proveedores (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    Direccion VARCHAR(255) NOT NULL,
    Correo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

-- Crear la tabla compras
CREATE TABLE compras (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    C_Compra INT NOT NULL,
    V_Compra INT NOT NULL,
    F_Compra DATE NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

-- Crear la tabla categorias
CREATE TABLE categorias (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    N_categoria VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

-- Crear la tabla ventas
CREATE TABLE ventas (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    C_Venta INT NOT NULL,
    V_Venta INT NOT NULL,
    F_Venta DATE NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

-- Crear la tabla informes
CREATE TABLE informes (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Tipo VARCHAR(255) NOT NULL,
    Fecha_I DATE NOT NULL,
    created_at TIMESTAMP NULL DEFAULT NULL,
    updated_at TIMESTAMP NULL DEFAULT NULL
);