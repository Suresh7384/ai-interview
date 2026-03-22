require("dotenv").config()
const app = require("./sb/app")
const connectToDB= require("./sb/config/database")
connectToDB()
app.listen(3000,()=>{
        console.log("server is running on port 3000")
    }
)
