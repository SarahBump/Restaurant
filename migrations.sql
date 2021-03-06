CREATE DATABASE restaurant_db;
\c restaurant_db

CREATE TABLE parties (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  count INTEGER);

CREATE TABLE foods (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  cost INTEGER);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  party_id INTEGER REFERENCES parties(id),
  food_id INTEGER REFERENCES foods(id),
  total INTEGER,
  paid BOOLEAN);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password_hash VARCHAR(255)
);
