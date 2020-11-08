const { req, res } = require('express');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require("body-parser");
const sql = require("mssql");
const app = express(); 
const port = 3000





app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


//Initiallising connection string
const dbConfig = {
    server: "licitaciones.mssql.somee.com",
    database: "licitaciones",
    user: "mario_somee_SQLLogin_1",
    password: "1rlv15bxt3"
};



//Function to connect to database and execute query
const executeQuery = function(res, query){            
  new sql.ConnectionPool(dbConfig).connect().then(pool => {
    return pool.request().query(query).then(result =>{
      res.send(result);
      //console.log(result);
      sql.close();
    }).catch(err => {
      res.status(500).send(err);
      //console.log(result);
      sql.close();
    })
  })
  
} 


// Empleados

//GET API
app.get("/api/empleado", function(req , res){
        const query = "select * from prueba where d =  'ricardo'";
        executeQuery(res, query);

});

//POST API
app.post("/api/empleado", function(req , res){
  console.log(req.body);
  const id = req.body.id; //nombre del lugar
  const aa = req.body.aa; // latitud 
  const bb = req.body.bb; // longitud
  const cc = req.body.cc; // la imagen 
  const dd = 'ricardo'; // quien hizo la insercion 
  // console.log(typeof especialidad); number
  const query = "INSERT INTO prueba (id,a, b, c, d) VALUES ('"+ id + "'," + aa + ", "+ bb + ", '" + cc + "','" + dd +"')";  

  //console.log(aa,'Query puesta', query); 
  executeQuery (res, query);


});

exports.app = functions.https.onRequest(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
