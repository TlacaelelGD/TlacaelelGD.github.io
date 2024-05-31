CREATE DATABASE Las_Brasas;

USE DATABASE Las_Brasas;

CREATE TABLE usuarios (
    correo VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
    nombre VARCHAR(75) NOT NULL, 
    contrasena VARCHAR(255) NOT NULL UNIQUE,
    CHECK (correo::text~*'[A-Z,a-z, ,0-9,.,-]+$'::text)
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(255) NOT NULL,
    forma_pago VARCHAR(50) NOT NULL,
    nombre_titular_tarjeta VARCHAR(255),
    numero_tarjeta VARCHAR(20),
    fecha_vencimiento VARCHAR(7),
    cvv VARCHAR(3),
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos_pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    id_pedido INT,
    cantidad INT,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id)
);

CREATE USER 'cliente'@'localhost' IDENTIFIED BY 'contraseña_cliente';
GRANT SELECT, INSERT ON tienda.* TO 'cliente'@'localhost';

CREATE USER 'admin_sistema'@'localhost' IDENTIFIED BY 'contraseña_admin';
GRANT ALL PRIVILEGES ON . TO 'admin_sistema'@'localhost' WITH GRANT OPTION;