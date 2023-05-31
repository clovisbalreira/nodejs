DEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e UTLs, entre outra funcionalidades
### npm install express --save

rodar o projeto
## node index.js

recuperar dependencia
### npm install

como instalar nodeman
### npm install -g nodemom
executar no pront de comando

como iniciar o servidor automaticamente
### npm install --save-dev nodemon

como iniciar o servidor
### nodemon

Comandos básicos de SQL
Acessar MySQL no pront de comando
### mysql -h localhost -u root -p

listar as base de dados
### SHOW DATABASE;

CRIAR A BASE DE DADOS
### CREATE DATABASES celke CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

apagar base de dados
### DROP DATABASE CELKE;

selecionar a base de dados
### USE celke;

criar tabela
###  CREATE TABLE `user`(
    `id` int NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `Email` VARCHAR(220) COLLATE utf8mb4_unicode_ci DEFAUlT NULL,
    PRIMARY key (`id`)
)ENGINE=innoDB DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;

listar tabelas
### SHOW TABLES

selecionar registro no banco de dados
### SELECT id, name, email FROM users;

LIMITAR USUARIO
### SELECT id, name, email FROM users;
limit 2 OFFSET 4;

ACRESCENTAR MAIS DE UMA CONDIÇÃO NA BUSCA
### SELECT id, name, email FROM users WHERE email = '' OR name = '' LIMIT 1;

ordenar 
### SELECT id, name, email FROM users ORDER BY id ASC;
### SELECT id, name, email FROM users ORDER BY id DESC;

inserir dados
### INSERT INTO users (name,email) VALUES ('clovis', clovisbalreira@gmail.com)

editar
### UPDATE users SET name='' email='' WHERE id=;

apagar
### DELETE FROM users WHERE id= LIMIT 1;

instalar depedencia msql
### npm install -save mysql2