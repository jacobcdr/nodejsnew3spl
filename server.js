const express = require('express');
const path = require('path');
const app = express();

// Middleware för att hantera formdata (för POST-förfrågningar)
app.use(express.urlencoded({ extended: true }));

// Ställ in 'public' som en mapp för statiska filer
app.use(express.static(path.join(__dirname, 'public')));

// Rotrutt som visar index.html (eller annan startfil i 'public')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutt för att visa inloggningssidan
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Hantera POST-förfrågan från inloggningsformuläret
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Här lägger du till din logik för att validera användaren
    // Exempelvis en kontroll mot en databas

    // Efter validering, kan du skicka tillbaka en respons:
    // res.send('Inloggning lyckad!'); eller res.redirect('/någon-sida');

    // Om inloggningen misslyckas, hantera det här
    // Exempelvis: res.send('Fel användarnamn eller lösenord.');
});

// Starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
