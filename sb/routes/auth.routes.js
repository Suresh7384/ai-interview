const {Router} = require('express')
const authController=require("../controllers/auth.controller")
const authRouter = Router()
/**
 * @route POST/ api/auth/register
 * @description Registration a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUsercontroller)
/**
 * @route POST/ api/auth/login
 * @description login a user
 * @access Public
 */
authRouter.post("/login",authController.loginUserController)
module.exports = authRouter