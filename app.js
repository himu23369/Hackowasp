const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt =   require('jsonwebtoken')

const JWT_SECRET = "dlasjlkjd()297@#idjkcn&HJk30dfjldkj37"

app.use(cors());
require("./userDetails")

app.use(express.json())

const mongoUrl = "mongodb+srv://Chirag:XCYYF2f5TzmqlKSj@cluster0.ib4uapn.mongodb.net/test"

mongoose.connect(mongoUrl,{
    useNewUrlParser : true
}).then(()=>{console.log("Connected to dataBase");})
.catch(e=>{console.log(e);})
 
app.get('/',(req,res)=>{
    res.send('HI');
})

app.listen(5000,()=>{
    console.log('Listning on port 5000');
})


const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const {fname,lname,email,password} = req.body;
    const  encryptedPassword = await bcrypt.hash(password,10)
    try {
        const oldUser = await User.findOne({email});
        if(oldUser){
          return res.send({error: "User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        })
        res.send({status:"Ok"})
    } catch (error) {
        res.send({status:"error"});
    }
})


app.post("/login-user",async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.json({error:"User Not Found"})
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data: token});
        }else{
            return res.json({error:"error"});
        }
    }else{
        res.json({status:"error",error:"Invalid Password"})
    }
});