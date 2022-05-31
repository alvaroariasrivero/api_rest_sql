# API REST PostgreSQL

API REST of user login/sign-up, logout and view and edit a list of products with with Node.js, Express and PostgreSQL using jwt(jsonwebtoken) authentication

## Libraries

- Express
- Bcrypt
- Dotenv
- Jsonwebtoken
- Mongoose
- Pg

## Installation

Install dependencies and devdependencies
```javascript
npm i 
```

Start project in localhost:3000
```javascript
npm start
```

## Queries

First of all, you need to create the tables in your PostgreSQL database

```javascript
CREATE TABLE users
(id_user serial NOT NULL PRIMARY KEY,
 username VARCHAR(50) NOT NULL,
 email VARCHAR(255) UNIQUE NOT NULL,
 password VARCHAR(200) NOT NULL,
 logged BOOLEAN NOT NULL
);
```

```javascript
CREATE TABLE posts
(
id_post serial NOT NULL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
content VARCHAR(140) NOT NULL,
date DATE default current_date,
id_user INT NOT NULL,
FOREIGN KEY (id_user) REFERENCES users (id_user)
)
```

## Dotenv variables

```javascript
DB_USER
DB_PASSWORD
DB_HOST
DB_PORT
DB_DATABASE
ULTRA_SECRET_KEY
```