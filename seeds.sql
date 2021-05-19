INSERT INTO department (dept_name) 
VALUES ('Front End'), ('Back End'), ('Management');

INSERT INTO roles (title, salary, dept_id) 
VALUES ('Head Manager', 90000.00, 3), 
('Head Chef', 50000.00, 2),
('Cook', 30000.00, 2),   
('Dishwasher', 20000.00, 2)             
('Floor Manager', 40000.00, 1),
('Server', 30000.00, 1),
('Hostess', 20000.00, 1);

INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) 
VALUES ('Adam', 'Anderson', 1, null),
('Bill', 'Brasky', 6, 1),
('Chris', 'Carpenter', 2, null);