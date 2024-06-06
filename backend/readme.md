
# Backend Authentication and CRUD API

## Table of Contents

- [Backend Authentication and CRUD API](#backend-authentication-and-crud-api)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Migrations and Seeds](#migrations-and-seeds)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
    - [Signup](#signup)
    - [Signin](#signin)
    - [Logout](#logout)
  - [Security](#security)
  - [License](#license)

## Overview

This is a Node.js backend project using Express and MySQL, providing user authentication and basic CRUD functionalities. It uses JWT for authentication and bcrypt for password hashing.

## Features

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- Database migrations and seeding with Knex.js

## Requirements

- Node.js
- MySQL

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure the database connection in `knexfile.js`:
    ```js
    // Update with your config settings.

    /**
     * @type { Object.<string, import("knex").Knex.Config> }
     */
    module.exports = {
      development: {
        client: 'mysql2',
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'db_tn' // Update this with your database name
        },
        migrations: {
          tableName: 'knex_migrations',
          directory: './migrations'
        },
        seeds: {
          directory: './seeds'
        }
      },

      staging: {
        client: 'mysql2',
        connection: {
          host: '127.0.0.1',
          database: 'db_tn',
          user: 'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      },

      production: {
        client: 'mysql2',
        connection: {
          host: '127.0.0.1',
          database: 'db_tn',
          user: 'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      }
    };
    ```

4. Create the database:
    ```sql
    CREATE DATABASE db_tn;
    ```

## Migrations and Seeds

1. Run migrations:
    ```sh
    npm run migrate
    ```

2. Run seed files:
    ```sh
    npm run seed
    ```

## Running the Application

1. Start the application in development mode (includes migrations and seeding):
    ```sh
    npm run start:dev
    ```

2. Alternatively, you can start the application without migrations and seeding:
    ```sh
    npm start
    ```

## API Endpoints

### Signup

- **URL:** `/signup`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "example",
    "email": "example@example.com",
    "password": "password123",
    "foto": "base64_encoded_image"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### Signin

- **URL:** `/signin`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "token": "jwt_token",
    "email": "example@example.com",
    "username": "example",
    "foto": "base64_encoded_image"
  }
  ```

### Logout

- **URL:** `/logout`
- **Method:** `POST`
- **Response:**
  ```json
  {
    "message": "Logout successful"
  }
  ```

## Security

- Passwords are hashed using bcrypt before storing them in the database.
- JWT tokens are used to authenticate users and are generated on successful login.

## License

This project is licensed under the MIT License.