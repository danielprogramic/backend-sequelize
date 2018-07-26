# backend-sequelize

bash terminal

Step 1
Create Docker container
docker run --name mybanco -e MYSQL_ROOT_PASSWORD=root -p 6603:3306 -d mysql:5.7

Step 2
Log in container > 
docker exec -it mybanco mysql -p

Step 3
Create database > 
create database demo;
show databases;

Install sequelize CLI

Use the command to add records
sequelize db:seed:all

My connection
  "development": {
    "username": "root",
    "password": "root",
    "database": "demo",
    "host": "127.0.0.1",
    "port": "6603",
    "dialect": "mysql"
  },
  
yarn install
yarn start

