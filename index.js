const express = require("express");
const  app    =  express();
const  cors   = require("cors")
const  fs     = require("fs");
let    data   =  fs.readFileSync('pl.json');
let    mainData = JSON.parse(data);

app.use(cors());
app.use(express.static(__dirname + 'public'));

app.get('/', (req, res)=>{
       res.send("Welcome to Premier League API......To Access This API go to the route /pl");
})
app.get('/pl', (req, res)=>{
      res.send(mainData);

});

app.get('/pl/:id/', (req, res)=>{
    let team = req.params.id ;
    team = team.charAt(0).toUpperCase()+team.slice(1).toLowerCase();
    console.log(team);
     console.log(mainData[team].content);
   

});


app.listen('3000', ()=>{
console.log("server Started!")

});
