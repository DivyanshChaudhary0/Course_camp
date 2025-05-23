
import mongoose from "mongoose";
import config from "../config/config.js";

async function connect(){
    await mongoose.connect(config.MONGO_URI)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log("db not connected");
    })
}

export default connect;