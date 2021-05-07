var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
const app = express();
var cors = require('cors')
const crypto=require('crypto')
var User=require("./models/user")
const dig_sig = require('./blockchain/digital_signature');
// const create_signature = require('../blockchain/digital_signature');
const hasher = require('./blockchain/chain_utility')
var Block=require("./models/blockModel");


const dbURI="mongodb://localhost/voting-app";
mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then((result)=> app.listen(5000,function(){console.log('Server has started.')}))
  .catch((err)=> console.log(err))


var primaryroutes=require('./routes/primary')

app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))




app.get('/',function(req,res){
    res.send("HI")
})

var keys={};
var votesig;

app.get("/voterinfo",function(req,res){
    var id=req.query.id
    console.log(id)
    // User.find({},function(err,users){
    //     console.log(users)
    // })
    
    User.findOne({ID:id})
    .then(user=>{console.log(user)
        keys.publicKey=user.public_key
        keys.privateKey=user.private_key
        res.json(user)})
    .catch(err=>{console.log(err)})
})

app.get("/createdigsig",function(req,res){
    var partyname=req.query.partyName;
    let JSONdata={}
    JSONdata.partyName=partyname
    let pvtkey=keys.privateKey
    votesign=dig_sig.create_signature(JSONdata, pvtkey).toString('base64')
    console.log("votesign",votesign)
    res.json(votesign)

})

app.get("/createblock",function(req,res){
    var id=req.query.id
    var partyName=req.query.partyName
    console.log(id,partyName)
    let JSONdata={}
    JSONdata.partyName=partyName
    let block={}
    let pvtkey=keys.privateKey
    block.vote=dig_sig.create_signature(JSONdata, pvtkey).toString('base64')
    block.party=partyName;
    Block.findOne({}, {}, { sort: { 'created_at' : -1 } })
    .then(prevBlock=>{
        console.log(prevBlock)
        block.prev_hash="jenjewbfjewbkjb"
        block['hash'] = hasher.hash_block(JSON.stringify(block));
        block['size'] = JSON.stringify(block).length+4;
         Block.create(block)
         .then(thisBlock=>{
             console.log(thisBlock)
         })
         .catch(err=>{
             console.log(err)
         })


    })
    .catch(err=>{
        console.log(err)
    });

    
})

app.get("/getblocksdata",function(req,res){
    let blocksdata=[]
    Block.find({})
    .then(allblocks=>{
        
        res.json(allblocks.reverse())

    })
    .catch(err=>{
        console.log(err)
    })
})

// app.listen(5000,function(){
//     console.log("Server has started.")
// })