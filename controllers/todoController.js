//controller that sets request handling

var data=[{item:'get milk'}, {item:'walk dog'}, {item:'kick some butt!'}];

//setting this function to be available in other script by require() command
module.exports = function(app){
    //if the user types webpageName/todo in browser this function will fire
    app.get('/todo', function(req, res){
        //this searches for todo.ejs in views folder
        //also we are passing data table as object called todos to te view 
        res.render('todo', {todos: data});
    });

    app.post('/todo', function(req, res){

    });

    app.delete('/todo', function(req, res){

    });
};