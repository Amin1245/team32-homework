CREATE DATABASE school;

USE school;

CREATE TABLE class (
    id INT,
    name VARCHAR(255),
    begins DATE,
    ends DATE
);

ALTER TABLE class
    ADD PRIMARY KEY (id);

CREATE TABLE student (
    id INT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    class_id INT
);

ALTER TABLE student
    ADD FOREIGN KEY (class_id) REFERENCES class(id);

CREATE INDEX idx_student_name ON student (name);

ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');
