let express = require('express')
let mongoose=require('mongoose')
let Users=require('./model/model')
mongoose.connect('mongodb://127.0.0.1:27017/mydata').then(()=>{
    console.log('Chal gaya');
    }).catch((err)=>{
      console.log(err,"nahi chala");
    })
   
let app = express()
let bcrypt=require('bcrypt')
app.use(express.json())
app.post('/signup',async(req,res)=>{
    let userData = req.body
   
    let {email}=req.body
    let User= await Users.findOne({email})
    console.log(email);
    if(User){
        res.send('user hai pehle hi')
    }
    else{
        userData.passWord= await bcrypt.hash((userData.passWord),10)
        console.log(userData.passWord);
        res.send('raam')
        
    }
   
    // res.send('eeree')
   
})
app.listen(5000,()=>{
    console.log('chal gaya...');
})