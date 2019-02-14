const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  // console.log('info: ', req.header('user-agent'))
  // console.log('req: ', req.headers)
  console.log('HOME');
  res.render('pages/index', {user: "michael"})
});
app.get('/blog', (req, res) => {
  console.log('BLOG');
  res.render('pages/blog')});

app.listen(3300, () => console.log('Express Server listening on port 3300'));