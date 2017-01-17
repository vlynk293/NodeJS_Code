const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.use((req, res, next) => {
  res.render('maintainance.hbs');
})

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('toUpperCase', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Home page'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    title: 'About page'
  });
});


app.listen(3000);
