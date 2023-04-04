DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE `departments` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(30) NOT NULL,
  KEY `Key` (`id`, `name`)
);

CREATE TABLE `roles` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(30) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT NOT NULL,
  FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`)
);

CREATE TABLE `employees` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `role_id` INT NOT NULL,
  `manager_id` INT, -- can be null in the case: role = manager :: thus, has no manager --
  FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`),
  FOREIGN KEY (`manager_id`) REFERENCES `employees`(`id`)
);