USE sknewdb;

CREATE TABLE students (
   id INT PRIMARY KEY AUTO_INCREMENT,
   student_name VARCHAR(30) NOT NULL,
   student_age INT CHECK (student_age >= 18),
   gender VARCHAR(20),
   course VARCHAR(30) DEFAULT 'tech',
   email VARCHAR(40) UNIQUE,
   admission_date DATETIME,
   created_by VARCHAR(30) DEFAULT 'admin',
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   is_active BOOLEAN DEFAULT TRUE
);

SELECT * FROM students;

