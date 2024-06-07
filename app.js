const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

path = require('path');

app.use(express.static(path.join(__dirname, '')));
 

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
 
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});
app.get('/header', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'header.html'));
});
app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'footer.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});