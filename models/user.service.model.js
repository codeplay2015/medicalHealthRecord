/**
 *   用户的数据库模式创建和声明
 *
 */
var mongoose = require("mongoose");    //引用mongoose模块

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:String,
    passWord:String,
    createTime:{type: Date,default:Date.now()}
});

var userModel = mongoose.model("user",userSchema);//声明集合

module.exports = userModel;




