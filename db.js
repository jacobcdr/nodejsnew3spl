const mysql = require('mysql');
require('dotenv').config();

// Skapar en anslutning till databasen med uppgifter från .env-filen
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Öppnar anslutningen till databasen
connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Successfully connected to the database.');
});

module.exports = connection;
