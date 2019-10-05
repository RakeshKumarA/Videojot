const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Handle bars middleware
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('Index', {
    title: title
  });
});

// About Route
app.get('/about', (req, res) => {
  res.render('About');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
