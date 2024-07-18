DROP DATABASE IF EXISTS herbs_dev;

CREATE DATABASE herbs_dev;

\c herbs_dev;

CREATE TABLE herbs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    entry_date DATE,
    nutrients TEXT NOT NULL,
    astrology_sign TEXT,
    chakra TEXT, 
    element TEXT,
    tea BOOLEAN,
    poisonous BOOLEAN NOT NULL,
    stock INT NOT NULL
);