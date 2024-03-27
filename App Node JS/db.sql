create database login;

use login;

create table usuarios(
	usu_id int primary key auto_increment,
	usu_nombre varchar(50) not null,
    usu_telefono int not null,
    usu_correo varchar(50) not null
);

show tables;

ALTER TABLE usuarios MODIFY COLUMN usu_telefono VARCHAR(50);

select *from usuarios;

INSERT INTO usuarios (usu_nombre, usu_telefono, usu_correo, contraseña)
VALUES ('Angie Cruz', 3203239694, 'angiecruz541@gmail.com', '1265731');

DELETE FROM usuarios WHERE usu_id = 3;

ALTER TABLE usuarios
ADD contraseña varchar(64);