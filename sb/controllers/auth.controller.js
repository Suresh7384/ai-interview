const userModule = require("../models/user.model")
/**
 * @name registerUserController
 * @description registrater a new user,expects username,email and password in the require
 * @access public
 */
async function registerUsercontroller(req,res){
    const { username,email,password} = req.body
    if(!username||!email|| !password){
        return res.status(400).json({
            message: "please provide username , email and password "
        })
    }
    const isUserAlreadyExists  = await userModel.findOne({
        $or:[{username},{email}]
    })
    if (isUserAlreadyExists){
        /*isUserAlreadyExists.username == username*/
        return res.status(400).json({
            message: "Account already exists with this email address or username"

        })
    }
}

module.exports={
    registerUsercontroller
}