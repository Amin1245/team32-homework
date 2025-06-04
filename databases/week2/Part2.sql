CREATE DATABASE school;

USE school;

CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    begins DATE,
    ends DATE,
    status ENUM('not-started', 'ongoing', 'finished')
);

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(255),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id) 
);

CREATE INDEX idx_student_name ON student (name);

