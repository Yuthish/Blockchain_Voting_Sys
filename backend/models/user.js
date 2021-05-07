var mongoose = require("mongoose");
const crypto = require("crypto");

//  const dbURI="mongodb://localhost/voting-app";
//  mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology:true })

//  const generate_keys = () => {
//     const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
//         modulusLength: 2048,
//         publicKeyEncoding: {
//             type: 'spki',
//             format: 'pem'
//           },
//         privateKeyEncoding: {
//             type: 'pkcs8',
//             format: 'pem',
//           }
//     });
//     console.log("pvt",privateKey)
//     return { publicKey, privateKey }
// }

var userSchema = mongoose.Schema({
    name: String,
    password: String,
    ID: Number,
    details:{
        age:Number,
        state:String,
        city:String,
        constituency:String
    },
    public_key: String,
    private_key: String

});

var User = mongoose.model("User", userSchema)

// var Keys=generate_keys()

// console.log("Key",Keys)
// var userone=new User({
//     name:"Jofin",
//     password:"1234",
//     ID:2,
//     details:{
//         age:20,
//         state:"TamilNadu",
//         city:"Nagercoil",
//         constituency:"XYZ"
//     },
//     public_key:Keys['publicKey'],
//     private_key:Keys['privateKey']

// })

// userone.save()

module.exports = User;