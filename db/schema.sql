DROP DATABASE IF EXISTS herbs_dev;

CREATE DATABASE herbs_dev;

\c herbs_dev;

CREATE TABLE herbs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    entry_date TEXT NOT NULL,
    pic TEXT NOT NULL,
    nutrients TEXT NOT NULL,
    astrology_sign TEXT,
    chakra TEXT, 
    element TEXT,
    tea BOOLEAN,
    poisonous BOOLEAN,
    stock INT NOT NULL
);