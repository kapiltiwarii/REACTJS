
let mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mydata').then(()=>{
console.log('db');
}).catch((err)=>{
  console.log(err,"nahi chala");
})

let userSchema=mongoose.Schema({
 
name:{
  type: String,
  required:true
},
lastName:{
    type:String,
    required:true
},
num:{
    type:Number
}

})
let Users=mongoose.model('User',userSchema)
// let user=new Users({name:'Kapil',lastName:"Tiwari",num:883940,isBool:true})
// user.save()


module.exports=Users