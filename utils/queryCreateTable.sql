CREATE TABLE users
(id_user serial NOT NULL PRIMARY KEY,
 username VARCHAR(50) NOT NULL,
 email VARCHAR(255) UNIQUE NOT NULL,
 password VARCHAR(200) NOT NULL,
 logged BOOLEAN NOT NULL
);

CREATE TABLE posts
(
id_post serial NOT NULL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
content VARCHAR(140) NOT NULL,
date timestamp default current_timestamp,
id_user INT NOT NULL,
FOREIGN KEY (id_user) REFERENCES users (id_user)
)