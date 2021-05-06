var express=require('express');
var router=express.Router()

var mongoose=require('mongoose')

// const dig_sig = require('../blockchain/digital_signature');

// const hasher = require('../blockchain/chain_utility')
var Block=require("../models/blockModel");

router.get('/',function(req,res){
    res.send("HI")
})