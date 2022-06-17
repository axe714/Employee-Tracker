USE company_db;

INSERT INTO departments (department_name)
VALUES 
    ("Rehab"),
    ("Nursing"),
    ("Custodial");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Occupational Therapist", 95000, 1),
    ("Physical Therapist", 105000, 1),
    ("Certified Nurse Assistant", 35000, 2);
    ("Plumber", 25000, 3);

INSERT INTO managers (manager_first_name, manager_last_name, department_id, salary)
VALUES
    ("Allec", "Arzadon", 1, 200000),
    ("Brian", "Alegre", 2, 150000),
    ("Connor", "Rockstar", 3, 54000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Alex", "Hull", 2, 1),
    ("Chad", "Tao", 3, 2),
    ("Kevin", "Lazaro", 4, 3);
