var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
//maps all links in html files and css files will be mapped to location given
//for example localhost:3000/assets/style.css will be mapped from location public/assets/styles.css
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to a port
app.listen(3000);
console.log('Server running on port 3000...');

