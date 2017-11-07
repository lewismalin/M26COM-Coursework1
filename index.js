const express = require('express') //import required modules
const app = express()
const users = require('./routes/users.js')
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(bodyparser.urlencoded({ extended: false })) //enable body parsing for POST requests
app.use(bodyparser.json()) //enable JSON form for the POST requests
app.use(cors({origin: '*'}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/blog/:table', users.getAll) //use methods included in users.js to get and post from the variable ":table", user would select one of the tables /blog/user for example
app.get('/blog/:table/:type/:value', users.getByValue)
app.get('/blog/:table/:type', users.getByType)
app.post('/blog/user', users.addUser)
app.post('/blog/post', users.addPost)
app.post('/blog/comment', users.addComment)


app.listen(3000, function() {
  console.log('Listen run on port 3000');
}); //connect the webserver on port 3000