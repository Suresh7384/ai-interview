const {Router} = require('express')
const authController=require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
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
/**
 * @route POST/ api/auth/logout
 * @description clear the token from cookie and add the token to blacklist 
 * @access Private
 */
authRouter.get("/logout",authController.logoutUserController)
/**
 * @route POST/ api/auth/get-me
 * @description get the currecnt looged in user details 
 * @access Private
 */
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)

module.exports = authRouter