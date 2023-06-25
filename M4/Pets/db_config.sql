-- db_config.sql
-- criando a database
CREATE DATABASE pets_db;

-- conectando ao banco de dados
\c pets_db

-- criando a tabela pets
CREATE TABLE IF NOT EXISTS pets (
    id BIGSERIAL PRIMARY KEY, 
    name VARCHAR(256) NOT NULL, 
    breed VARCHAR(100) NOT NULL, 
    age INT, 
    owner_name VARCHAR(100) UNIQUE NOT NULL 
);
 -- Dando erro
\i db_config.sql

INSERT INTO
  users ("name", "cpf", "password")
VALUES
  ('Fabio Jr.', '01234567899', 'fabiosenior'),
  ('Cauan F.', '99876543210', 'listcomprehensionlover'),
  ('Jardel L.', '87654321901', 'htmlcssdom>nodejs');
