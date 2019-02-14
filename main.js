const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('info: ', req.header('user-agent'))
  console.log('req: ', req.headers)
  console.log('ip: ', req.ip)
  res.render('pages/index', {user: "michael"})
});

app.listen(3300, () => console.log('Express Server listening on port 3300'));