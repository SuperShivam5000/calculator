const express = require("express");
const bodyParser =require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var result = Number(req.body.num1) + Number(req.body.num2);
  res.send("The Result Is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
