const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {user: "michael"}));

app.listen(3300, () => console.log('Express Server listening on port 3300'));