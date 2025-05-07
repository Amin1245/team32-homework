CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255),
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    parent_comment_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (parent_comment_id) REFERENCES comments(id)
);

CREATE TABLE IF NOT EXISTS reactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT,
    comment_id INT,
    reaction_type ENUM('like', 'highfive', 'laugh', 'cry') NOT NULL,
    UNIQUE(user_id, post_id, reaction_type),
    UNIQUE(user_id, comment_id, reaction_type),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (comment_id) REFERENCES comments(id)
);

CREATE TABLE IF NOT EXISTS friendships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user1_id) REFERENCES users(id),
    FOREIGN KEY (user2_id) REFERENCES users(id)
);





INSERT INTO users (name, email, password, registration_date) VALUES
('Ali Reza', 'ali@gmail.com', 'pass123', NOW()),
('Sara Noor', 'sara@yahoo.com', 'secretpass', NOW());

INSERT INTO posts (user_id, title, content, created_at) VALUES
(1, 'First Post', 'This is my first post!', NOW()),
(2, 'Hello World', 'Excited to join!', NOW());

INSERT INTO comments (user_id, post_id, content, created_at) VALUES
(2, 1, 'Welcome Ali!', NOW()),
(1, 2, 'Thanks Sara!', NOW());

INSERT INTO reactions (user_id, post_id, reaction_type) VALUES
(2, 1, 'like'),
(1, 2, 'laugh');

INSERT INTO friendships (user1_id, user2_id, created_at) VALUES
(1, 2, NOW());
