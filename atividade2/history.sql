-- Active: 1701968337927@@127.0.0.1@3306@nodecon


CREATE DATABASE nodecon;

CREATE Table IF NOT EXISTS usuario(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email varchar(200)UNIQUE,
    senha VARCHAR(200)
)

DROP TABLE usuario;