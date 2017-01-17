const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  var log =  `${new Date().toString()} : ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n');
  next();
});

// app.use((req, res, next) => {
//   res.render('maintainance.hbs');
// })

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


app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
