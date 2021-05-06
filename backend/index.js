var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
const app = express();
var cors = require('cors')


// const dbURI="mongodb://localhost/Contestants";
// mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
//  .then((result)=> app.listen(5000,function(){console.log('Server has started.')}))
//  .catch((err)=> console.log(err))


var primaryroutes=require('./routes/primary')

app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))




app.get('/',function(req,res){
    res.send("HI")
})

app.listen(5000,function(){
    console.log("Server has started.")
})