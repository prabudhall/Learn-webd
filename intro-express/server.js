
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(request, response){
//   // console.log(response);
//   // can send html also instead of text only
//   response.send("<h1>Hello World</h1>");
// });
//
// app.get("/contact", function(request, response){
//   // console.log(response);
//   // can send html also instead of text only
//   response.send("<h1>Contact page</h1>");
// });

app.get("/", (req, res)=>{
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});
// inside html form action is sending at the page and at that page we are catching the values using "post" at that action page 
app.post("/abc", function (req, res) {
  console.log(req.body);
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var ans = n1+n2;

  res.send("the sum is : " + ans);

});

app.listen(7000, ()=>{
  console.log("Server Established");
});
