let express = require('express')
let mongoose = require('mongoose')
let Users = require('./model/model')
mongoose.connect('mongodb://127.0.0.1:27017/kapil').then(() => {
    console.log('Chal gaya');
}).catch((err) => {
    console.log(err, "nahi chala");
})

let app = express()
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
app.use(express.json())
app.get('')
app.post('/signup', async (req, res) => {
    let userData = req.body
    // console.log(userData);
    let { email } = req.body
    let User = await Users.findOne({ email })
    console.log(email);
    if (User) {
        res.send('user hai pehle hi')
    }
    else {
        userData.passWord = await bcrypt.hash((userData.passWord), 10)

        console.log(userData.passWord);
        // res.send('raam')
     let dbUser= new Users({
        name:userData.name,
        lastname:userData.lastname,
        email:userData.email,
        passWord: userData.passWord
      })
      await dbUser.save()
      res.send('raam')
    }

    // res.send('eeree')
    })
    app.post('/login',async(req,res)=>{
        // console.log(req.body);
    let userInfo=req.body
    let loginData = await Users.findOne({email:userInfo.email})
    if (!loginData) {
        res.send('user nhi mila')
    }
    else{
        // res.send('koi mil gya')
       let validPass=  await bcrypt.compare(userInfo.passWord,loginData.passWord)
       if (!
        
        
        validPass) {
        res.send('invalid')
       }
       else{
        let data = JSON.stringify(loginData)
       let token= jwt.sign(data,"kapilbhaai")
        res.send({token,loginData})
       }
    }
    
    })
app.listen(5000, () => {
    console.log('chal gaya...');
})