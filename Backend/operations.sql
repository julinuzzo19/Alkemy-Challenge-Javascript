CREATE TABLE IF NOT EXISTS `categories`(
    `category_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    PRIMARY KEY(`category_id`))
    ENGINE=InnoDB;

INSERT INTO `categories` (`category_id`,`name`) VALUES
    (1,'Comidas'),
    (2,'Impuestos'),
    (3,'Gustos');


CREATE TABLE IF NOT EXISTS `users`(
    `user_id` int NOT NULL AUTO_INCREMENT,
    `email` varchar(50) NOT NULL,
    `password` varchar(50) NOT NULL,
    PRIMARY KEY(`user_id`))
    ENGINE=InnoDB;

    INSERT INTO `users` (`user_id`,`email`,`password`) VALUES
    (1,'cliente1@gmail.com','cliente1'),
    (2,'cliente2@gmail.com','cliente2'),
    (3,'cliente3@gmail.com','cliente3');

CREATE TABLE IF NOT EXISTS `operations`(
    `operation_id` int NOT NULL AUTO_INCREMENT,
    `concepto` varchar(50) NOT NULL,
    `monto` int NOT NULL,
    `fecha` DATETIME NOT NULL,
    `tipo` varchar(10) NOT NULL,
    `category_id` int NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`operation_id`),
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`))
    ENGINE=InnoDB;

    INSERT INTO `operations` (`operation_id`, `concepto`, `monto`, `fecha`,`tipo`,`category_id`,`user_id`) VALUES
(1, 'Servicio de luz', 3000, '2021-08-18 13:26:17','egreso',2,1),
(2, 'Sueldo', 2000, '2021-08-18 16:21:17','ingreso',2,1),
(4, 'Netflix', 800, '2021-08-18 21:15:17','egreso',3,2),
(5, 'Celular',1200, '2021-08-18 23:27:17','egreso',3,3);


