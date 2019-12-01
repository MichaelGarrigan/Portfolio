const express = require('express');
const app = express();
const blogDict = require('./controllers/blogController.js');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get(
  '/', 
  (req, res) => res.render('pages/applications', {link: 'home'})
);

app.get(
  '/applications', 
  (req, res) => res.render('pages/applications', {link: 'applications'})
);

app.get(
  '/blog', 
  (req, res) => res.render('pages/blog', {link: 'blog'})
);

app.get(
  '/resume', 
  (req, res) => res.render('pages/resume', {link: 'resume'})
);

app.get(
  '/blog/:blog_name', 
  (req, res) => {
    const name = req.params.blog_name;

    if (blogDict[name])
      res.render(`partials/blogs/${blogDict[name]}`)
  }
);

const port = process.env.PORT || 5080;

app.listen(port, () => console.log(`Express Server listening on: ${port}`));