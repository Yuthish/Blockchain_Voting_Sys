var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    Name: String,
    password: String,
    ID: String,
    public_key: String,
    private_key: String

});

var User = mongoose.model("User", userSchema)

module.exports = User;