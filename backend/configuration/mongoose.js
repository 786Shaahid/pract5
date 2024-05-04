import mongoose  from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
const url=process.env.DB_URL;
export const ConnetionDB=()=>{
    return new Promise(async(resolve,reject)=>{
        try {
           const connection= await mongoose.connect(url) ;
           if(connection){
              return resolve(connection.connections[0]);
           } else{
             throw "Something Went Wronge With Connection";
           }
        } catch (error) {
            return reject(error);
        }
    })
}