const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));
app.get('/art', (req, res) => res.render('pages/art'));
app.get('/blog', (req, res) => res.render('pages/blog'));
app.get('/resume', (req, res) => res.render('pages/resume'));

const port = process.env.PORT || 5080;

app.listen(port, () => console.log(`Express Server listening on: ${port}`));