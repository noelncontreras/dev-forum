--creating tables
-- CREATE TABLE devforumuser (
-- user_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(25) NOT NULL,
-- username VARCHAR(15) NOT NULL,
-- hash TEXT NOT NULL
-- );

-- CREATE TABLE topic (
-- topic_id SERIAL PRIMARY KEY,
-- topic_name TEXT NOT NULL
-- );

-- CREATE TABLE post (
-- post_id SERIAL PRIMARY KEY,
-- topic_id INTEGER NOT NULL REFERENCES topic(topic_id),
-- user_id INTEGER NOT NULL REFERENCES devforumuser(user_id),
-- user_post VARCHAR(500) NOT NULL
-- );

--inserting data into topic table
-- INSERT INTO topic (topic_name)
-- VALUES ('Front-end'), ('Back-end'), ('Database');

--inserting data into post table
-- INSERT INTO post (topic_id, user_id, user_post)
-- VALUES 
-- (1, 3, 'This is a post'),
-- (2, 2, 'Hello to the ground'),
-- (3, 1, 'What do you want?');