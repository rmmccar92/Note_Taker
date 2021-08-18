const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const notePath = require('./routes/notes')

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes' , (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.use('api/notes' , notePath)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);