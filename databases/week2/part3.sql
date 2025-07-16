-- 1. Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
    task.title AS task_title,
    user.name AS user_name,
    user.email AS user_email
FROM user
JOIN task ON user.id = task.user_id
WHERE user.email LIKE '%@spotify.com';

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
    task.title AS task_title,
    user.name AS user_name,
    status.name AS status_name
FROM task
JOIN user ON task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck'
AND status.name = 'Not started';

-- 3. Get all the tasks for 'Maryrose Meadows' that were created in September
SELECT
    task.title AS task_title,
    task.created AS created_date,
    user.name AS user_name
FROM task
JOIN user ON task.user_id = user.id
WHERE user.name = 'Maryrose Meadows'
AND MONTH(task.created) = 9;

-- 4. Find how many tasks were created in each month
SELECT
    MONTHNAME(task.created) AS month_name,
    COUNT(*) AS task_count
FROM task
GROUP BY MONTH(task.created), month_name
ORDER BY MONTH(task.created);