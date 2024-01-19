const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

// Middleware för att hantera form-data
app.use(express.urlencoded({ extended: true }));

// Ställer in mappen 'public' för att servera statiska filer
app.use(express.static(path.join(__dirname, 'public')));

// Rotrutt som visar inloggningssidan
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Hanterar inloggningsförfrågan
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Här skulle du lägga till din logik för att validera användaren mot databasen
    // Exempelvis en SQL-förfrågan som söker efter användaren
});

// Startar servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
