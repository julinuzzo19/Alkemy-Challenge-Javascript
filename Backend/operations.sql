CREATE TABLE IF NOT EXISTS `operations`(
    `operation_id` int(10) NOT NULL AUTO_INCREMENT,
    `concepto` varchar(50) NOT NULL,
    `monto` int(20) NOT NULL,
    `fecha` DATETIME NOT NULL,
    `tipo` varchar(10) NOT NULL,
    PRIMARY KEY (`operation_id`))
    ENGINE=InnoDB;

    INSERT INTO `operations` (`operation_id`, `concepto`, `monto`, `fecha`,`tipo`) VALUES
(1, 'Servicio de luz', 3000, '2021-08-18 13:26:17','egreso'),
(2, 'Sueldo', 2000, '2021-08-18 16:21:17','ingreso'),
(4, 'Netflix', 800, '2021-08-18 21:15:17','egreso'),
(5, 'Celular',1200, '2021-08-18 23:27:17','egreso');