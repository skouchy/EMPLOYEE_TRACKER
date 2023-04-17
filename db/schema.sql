-- DROPping TABLEs in order of table dependencies
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;



CREATE TABLE `departments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(30) NOT NULL,
  KEY `Key` (`id`, `name`)
);

-- CREATE TABLE `roles` (
--   `id` INT AUTO_INCREMENT PRIMARY KEY,
--   `title` VARCHAR(30) NOT NULL,
--   `salary` DECIMAL NOT NULL,
--   `department_id` INT NOT NULL,
--   CONSTRAINT fk_department FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE CASCADE
-- );

-- CREATE TABLE `employees` (
--   `id` INT AUTO_INCREMENT PRIMARY KEY,
--   `first_name` VARCHAR(30) NOT NULL,
--   `last_name` VARCHAR(30) NOT NULL,
--   `role_id` INT NOT NULL,
--   `manager_id` INT, -- can be null in the case: role = manager, in which the manager would not report to another
--   CONSTRAINT fk_role FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE,
--   CONSTRAINT fk_manager FOREIGN KEY (`manager_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE
-- );