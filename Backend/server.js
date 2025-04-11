
import app from "./src/app.js"
import connect from "./src/database/db.js";
import dotenv from "dotenv";
dotenv.config();


app.listen(3000, async function(){
    await connect();
    console.log("app is runnning on port 3000");  
})
