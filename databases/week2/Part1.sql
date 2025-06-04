INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("Schedule a meeting", "Prepare slides and invite participants", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "2025-04-30 10:00:00", 2, 5);

UPDATE task SET title = 'Hold a meeting' WHERE id = 42

UPDATE task set due_date = '2025-04-30 14:00:00' WHERE id = 42;

UPDATE task set status_id = 3 WHERE id = 42;

UPDATE task set status_id = (select id from status where name = 'Done') where id = 41;

DELETE from task where id = 42;

