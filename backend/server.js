import express from 'express';
import { ConnetionDB } from './configuration/mongoose.js';
import path from 'path'
const app=express();
const port= process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// app.post('/api/')



app.get('/api/mydata',(req,res)=>{
    return res.status(200).send({message:'mai kam kar rha hu mere bahi'})
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(path.resolve(),'frontend','dist')));
    app.get('*',(req,res)=>{
          return res.sendFile(path.join(path.resolve(),'frontend','dist','index.html'))
    });

}else{
    app.get('/*',(req,res)=>{
        return res.send('API local hai ')
    })
}


ConnetionDB().then(connect=>{
    app.listen(port,()=>{
        console.log(`Server is listening on port :: ${port}`); 
        console.log(`DBConnected :: ${connect.name}`); 
    })
}).catch(err=>{
    console.log(`Error :: ${err}`);
})
