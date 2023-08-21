const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
{
    email: {
        type: String,
        require: true,
    }, 
    password: {
        type: String,
        require: true,
    } 
    ,
    timesstamps: {
        createdAt: Date,
        updateAt: Date,
    },
    name :{
        type : String,
        require : true,
    }
}
)
module.exports = mongoose.model("User" , UserSchema);