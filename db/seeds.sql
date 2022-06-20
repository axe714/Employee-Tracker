USE company_db;

INSERT INTO departments (department_name)
VALUES 
    ("Rehab"),
    ("Nursing"),
    ("Custodial"),
    ("Administration");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Occupational Therapist", 95000, 1),
    ("Physical Therapist", 105000, 1),
    ("Rehab Aide", 44000, 1),
    ("Certified Nurse Assistant", 35000, 2),
    ("Registered Nurse", 88000, 2),
    ("License Vocational Nurse", 55000, 2),
    ("Plumber", 25000, 3),
    ("Janitor", 34000, 3),
    ("Pay Roll", 65000, 4),
    ("Marketer", 83000, 4);

INSERT INTO managers (manager_first_name, manager_last_name, department_id, salary)
VALUES
    ("Allec", "Arzadon", 1, 200000),
    ("Mark", "Sy", 1 , 119000),
    ("Brian", "Alegre", 2, 150000),
    ("Michelle", "Wu", 2, 111000),
    ("Connor", "Rockstar", 3, 54000),
    ("Adam", "Elsworth", 4, 225000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Alex", "Hull", 2, 2),
    ("Patrick", "Tan", 1, 1),
    ("Eric", "Soderquist", 2, 2),
    ("Shu", "Wei", 3, 2),
    ("Anuj", "Thapar", 1, 1),
    ("Brianna", "Aguilar", 5, 4),
    ("Karla", "Moneybag", 9, 6),
    ("Grace", "Santos", 5, 4),
    ("Kate", "Kim", 6, 3),
    ("Mark", "Kao", 8, 5),
    ("Chad", "Tao", 4, 3),
    ("Kevin", "Lazaro", 7, 5),
    ("Alyssa", "Magdaleno", 10, 6);
