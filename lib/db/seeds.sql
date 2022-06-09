USE company_db;

INSERT INTO departments (department_name)
VALUES 
    ("Rehab"),
    ("Nursing"),
    ("Custodial");

INSERT INTO roles (title, salary)
VALUES 
    ("Occupational Therapist", 95000),
    ("Physical Therapist", 105000);

INSERT INTO managers (manager_first_name, manager_last_name, department_id, salary)
VALUES
    ("Allec", "Arzadon", 1, 200000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Kevin", "Lazaro", 2, 1);