// console.log("hello");
// let joke= require('give-me-a-joke')

// joke.getRandomCNJoke((joke)=>{
//     console.log(joke);
// })
// const { log } = require('console')
// let fs= require('fs')
//create
//fs.writeFileSync('fsd88.txt','hello gm')
//rename
//fs.renameSync('fsd88.txt','fsd7.js')
//read
//let data =fs.readFileSync('fsd7.js')
//console.log(data.toString());
//delete
//fs.unlinkSync('read.js')


//asycfile crreation way 
// fs.writeFile('index.html','<h1> heelo new file </h>' ,(err)=>{
// if(err) throw err
// console.log('file crested succusfuuly')

// })
// fs.rename('index.html','index2.html',(err)=>{
//     if(err)throw err
//     console.log('created succesully 2')
// })
// fs.unlink('index.html',(err)=>{
// if(err) throw err
// console.log('Deleted');
// } )

// let http = require('http')
// let Server=http.createServer((req,res)=>{
//     res.end('HY666')
// })
// Server.listen(5000,()=>{
//     console.log('Server running on port no 5000');
// })

// let express=require('express')

// let app= express()

// app.use((req,res)=>{
//     res.send('Hello this is Server')
// })
// app.get('/',(req,res)=>{
// res.send('<h3> hello bhai sahab hhh </h3>')
// })
// app.get('/cat',(req,res)=>{
//     res.send('Billi Agyi re bhai')
// })
// app.get('/new',(req,res)=>{
//     res.send('Nyi Billi Agyi')
// })
// app.get('*',(req,res)=>{
// res.send('Kuch bhi aja')
// })
// app.listen(4000,()=>{
//     console.log("server started");
// })


// let express=require('express')

// let app= express()
// app.get('/',(req,res)=>{
// res.send('<h3> hello bhai sahab hhh </h3>')
// })
// app.get('/:r/:a',(req,res)=>{
// let {r,a}=req.params


// res.send(`${a}  and  ${r}` )
// // console.log({a},"rrr");
// })
// app.get('/Start',(req,res)=>{
// // console.log(req.query,'rrr');
// let {FirstName,LastName,EnrollNo}=req.query
// res.send(`${FirstName} ${LastName}  ${EnrollNo}`)
// })

// app.listen(4000,()=>{
//         console.log("server started");
//     })

// let express=require('express')

// let app= express()

// app.set('view engine','ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// // let arr=['hii','hii','tiwariji','hii']

// app.get('/',(req,res)=>{

//     res.render('GetMethod')
// })
// app.get('/user',(req,res)=>{
//    let {name,email,password}= req.query
//    console.log(req.query);
//   // res.send(`${name} ${email} ${password}`)
//   res.send('hello')
// })

// app.post('/user',(req,res)=>{
//   console.log(req.body,'rrr');
//   let {name,email,password}= req.body
// res.send(`${name} ${email} ${password}`)
// res.send('hello')
// })
// app.get('/:hii',(req,res)=>{

//     // let a= Math.floor(Math.random()*100)
//   let {hii}=req.params
//     res.render('random',{arr,hii})
// })
// app.listen(4000,()=>{
//            console.log("server started");
//         })


// let express=require('express')

// let app= express()
// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:true}))
// let methodOverride= require('method-override')
// app.use(methodOverride('_method'))
// let comments =[
//   {
//     id:0,
//     username:"Sam",
//     Comment:"chitkara is a nice univercity 0"
//   },
//   {
//     id:1,
//     username:"Kapil",
//     Comment: "Shimla is a very nyc place !!"
//   },
//   {
//     id:2,
//     username:"Kalpesh",
//     Comment: "Kalpesh is from khairipaika  !!"
//   }
// ]

// app.get('/blogs',(req,res)=>{

//   res.render('Restful',{comments})
// })
// app.get('/blogs/new',(req,res)=>{

//   res.render('new',{comments})
// })
// app.post("/blogs",(req,res)=>{
//     console.log(req.body,"rrr");
//     let {username,Comment} =req.body
//     comments.push({username,Comment})
//     res.redirect('/bold')
// })
// app.get("/blogs/:id",(req,res)=>{
// let {id}=req.params
// console.log(id,"hhh");
// let findData=comments.find((data)=>{return data.id==id})
// console.log(findData);
// res.render('edit',{findData})
// })
// app.patch("/blogs/:id",(req,res)=>{
//   let {id}= req.params
//   console.log(id,"rrr");
//   let {username,Comment} = req.body
//   let Data=comments.find((data)=>{return data.id==id})

//   Data.Comment=Comment
//   Data.username=username
//   console.log(Data);
//  res.redirect('/blogs')
// })
// app.delete("/blog/:id",(req,res)=>{
//  let {id}=req.params
//    console.log(id);
//    let newData=comments.filter((data)=>{
//     return data.id!=id
//    }) 
//    comments=newData
//    res.redirect('/blogs')

// })
// app.listen(5000,()=>{
//   console.log("server.....");
// })

// CSR AND SSR
// let arr=[1,2,3,4,5]
// let express=require('express')

// let app= express()
// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:true}))
// app.use(express.static('public'))
// app.get('/todo',(req,res)=>{

//   if(req.xhr){
//     res.json(arr)
//   }
//   else{
//     res.render('SSR',{arr})
//   }

// })
// app.post('/todo',(req,res)=>{
//   console.log(req.body);
//   let {data} = req.body
//   let data1 =parseInt(data)
//   arr.push(data1)
//   res.redirect('/todo')
// })
// app.listen(5000,()=>{
//     console.log("server.....");
//   })



//MONGO DB CONNECT
let express = require('express')
let Users = require('./db/model/model')
// let mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/mydata').then(()=>{
// console.log('db');
// }).catch((err)=>{
//   console.log(err,"nahi chala");
// })

// let userSchema=mongoose.Schema({

// name:{
//   type: String,
//   required:true
// },
// lastName:String,
// num:Number,
// isBool:Boolean
// })
// let Users=mongoose.model('User',userSchema)
let user = new Users({ name: 'Kapil', lastName: "Tiwari", num: 883940 })
user.save()
let app = express()
app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(4000, () => {
    console.log('server......');
})