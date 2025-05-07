CREATE DATABASE meal_sharing;
USE meal_sharing;

-- Meal table
CREATE TABLE meal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255) NOT NULL,
  `when` DATETIME NOT NULL,
  max_reservations INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_date DATE NOT NULL,
  contact_phone VARCHAR(20),
  contact_email VARCHAR(255)
);

-- reservation table
CREATE TABLE reservation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  number_of_guests INT NOT NULL,
  meal_id INT NOT NULL,
  created_date DATE NOT NULL,
  contact_phone VARCHAR(20) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
);

-- Review Table
CREATE TABLE review (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  meal_id INT NOT NULL,
  stars INT NOT NULL CHECK (stars BETWEEN 1 AND 5),
  created_date DATE NOT NULL,
  FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
);


-- Sample meals
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date, contact_phone, contact_email)
VALUES 
('Italian Pasta Night', 'Homemade pasta with various sauces', 'Copenhagen', '2025-06-20 19:00:00', 8, 120.00, '2025-05-15', '+4512345678', 'pasta@example.com'),
('Vegetarian Curry', 'Spicy Indian curry with seasonal vegetables', 'Aarhus', '2025-06-22 18:30:00', 6, 90.00, '2025-05-10', '+4523456789', 'curry@example.com'),
('Sushi Platter', 'Fresh Japanese sushi assortment', 'Odense', '2025-06-25 19:30:00', 5, 150.00, '2025-05-12', '+4534567890', 'sushi@example.com');

-- Sample reservations
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phone, contact_name, contact_email)
VALUES
(2, 1, '2025-06-01', '+4511111111', 'John Smith', 'john@example.com'),
(3, 2, '2025-06-05', '+4522222222', 'Emma Johnson', 'emma@example.com'),
(1, 3, '2025-06-10', '+4533333333', 'Michael Brown', 'michael@example.com');

-- Sample reviews
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
('Amazing experience', 'The pasta was delicious and host very friendly', 1, 5, '2025-06-21'),
('Good but not great', 'Nice flavors but portion was small', 2, 4, '2025-06-23'),
('Excellent quality', 'Fresh and authentic sushi', 3, 5, '2025-06-26');


-- Get all meals
SELECT * FROM meal;

-- Add new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date, contact_phone, contact_email)
VALUES ('Greek Salad', 'Fresh salad with feta cheese and olives', 'Aalborg', '2023-07-05 18:00:00', 4, 75.00, CURDATE(), '+4544444444', 'salad@example.com');

-- Get meal by ID
SELECT * FROM meal WHERE id = 2;

-- Update meal
UPDATE meal SET price = 95.00, max_reservations = 7 WHERE id = 2;

-- Delete meal
DELETE FROM meal WHERE id = 3;

SELECT * FROM reservation ;

INSERT INTO reservation(number_of_guests, meal_id, created_date, contact_phone, contact_name, contact_email)
VALUES 
(5, 4, '2025-06-01', '+4591727154', 'Amin Babapour', 'babapour.amin@gmail.com');


SELECT * FROM reservation WHERE id=4;

UPDATE reservation SET number_of_guests= 4 , contact_phone=91727154 WHERE id=3;

DELETE FROM reservation WHERE id=3;


-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Fantastic dinner', 'Everything was perfect!', 1, 5, CURDATE());

-- Get review by ID
SELECT * FROM review WHERE id = 1;

-- Update review
UPDATE review SET stars = 4, title = 'Great dinner' WHERE id = 1;

-- Delete review
DELETE FROM review WHERE id = 2;


SELECT * FROM meal WHERE price < 90;

-- Get meals that still have available reservations
SELECT *
FROM meal
WHERE max_reservations > (SELECT COUNT(*) FROM reservation
WHERE meal_id = meal.id);

-- Get meals that partially match a title
SELECT * FROM meal WHERE title LIKE '%rød grød med%';

-- Get meals created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2025-05-10' AND '2025-05-20';

-- Get only 5 meals
SELECT * FROM meal LIMIT 5;

-- Get meals that have good reviews (stars >= 4)
SELECT DISTINCT m.*
FROM meal m
JOIN review r ON m.id = r.meal_id
WHERE r.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE meal_id = 1
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT m.*, AVG(r.stars) AS average_rating
FROM meal m
JOIN review r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY average_rating DESC;