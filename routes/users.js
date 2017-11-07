const mysql = require('mysql') //import mysql

var connection = mysql.createConnection({ //give the login details for the database
  host: "localhost",
  database: "blog",
  user: "root",
  password: ""
});

connection.connect(function(err) { //connect to the database
  if (err) throw err;
  console.log("API connected to localhost.")
});




exports.getAll = function(req, res){ //a selection that takes in the variable given
    var sql = "select * from ??;"
    connection.query(sql, req.params.table, function (err, data) { //query the database 
        if (err) {
            res.status(400).send(err) //if an error send 400 and error
        }
        else{
            res.status(200).send(data); //else send data
        }
    })
}

exports.getByValue = function(req, res){
    var sql = "select * from ?? where ?? = ?;"

    connection.query(sql, [req.params.table, req.params.type, req.params.value], function(err,data){
        if (err){ 
            res.status(400).send(err)
        }else{
            res.status(200).send(data);
        }
        
    })
}

exports.getByType = function(req, res){
    var sql = "select ?? from ??;"

    connection.query(sql, [req.params.type, req.params.table], function(err,data){
        if (err){ 
            res.status(400).send(err)
        }else{
            res.status(200).send(data);
        }
        
    })
}


exports.addUser = function(req, res){
    var sql = "INSERT INTO user(pass,username,firstname,lastname) VALUES (?,?,?,?);"
    connection.query(sql,[req.body.pass, req.body.username, req.body.firstname, req.body.lastname], function(err, data){
        if (err){ 
            res.status(400).send(err)
        }else{
            res.status(200).send(data);
        }
        
    })
}

exports.addPost = function(req, res){
    var sql = "INSERT INTO posts(title,text,tags,user_id) VALUES (?,?,?,?);"
    connection.query(sql,[req.body.title, req.body.text, req.body.tags, req.body.lastname], function(err, data){
        if (err){ 
            res.status(400).send(err)
        }else{
            res.status(200).send(data);
        }
        
    })
}


exports.addComment = function(req, res){
    var sql = "INSERT INTO comments(post_id,user_id,comment) VALUES (?,?,?);"
    connection.query(sql,[req.body.post_id, req.body.user_id, req.body.comment], function(err, data){
        if (err){ 
            res.status(400).send(err)
        }else{
            res.status(200).send(data);
        }
        
    })
}
