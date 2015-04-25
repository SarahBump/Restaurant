CREATE DATABASE restaurant_db;
\c restaurant_db;

CREATE TABLE parties (id SERIAL PRIMARY KEY, name VARCHAR(255), count INTEGER);

CREATE TABLE orders (id SERIAL PRIMARY KEY, party_id REFERENCES parties(id), food_id REFERENCES foods(id), total INTEGER, paid BOOLEAN);

CREATE TABLE foods (id SERIAL PRIMARY KEY, name VARCHAR(255), cost INTEGER);
