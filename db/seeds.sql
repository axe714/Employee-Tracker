USE company_db;

INSERT INTO departments (department_name)
VALUES 
    ("Rehab"),
    ("Nursing"),
    ("Custodial");

INSERT INTO roles (title, salary, department_id)
VALUES 
    -- Rehab id = 1
    -- Nursing id = 2
    -- Custodial id = 3
    ("Occupational Therapist", 95000, 1),
    ("Physical Therapist", 105000, 1),
    ("Certified Nurse Assistant", 35000, 2),
    ("Plumber", 29000, 3);


INSERT INTO managers (manager_first_name, manager_last_name, department_id, salary)
VALUES
    ("Allec", "Arzadon", 1, 200000),
    ("Brian", "Alegre", 2, 150000),
    ("Connor", "Rockstar", 3, 54000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    -- Alex has a role of PHYSICAL THERAPIST (role id 2) and his manager is ALLEC (manager id 1)
    -- Chad has a role of Nurse Assistant (role id 3) and his manager is BRIAN (manager id 2)
    -- Kevin has a role of PLUMBER (role id 4) and his manager is CONNOR (manager id 3)
    ("Alex", "Hull", 2, 1),
    ("Chad", "Tao", 3, 2),
    ("Kevin", "Lazaro", 4, 3);
