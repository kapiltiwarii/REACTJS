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


let express=require('express')

let app= express()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
let comments =[
  {
    id:0,
    username:"Sam",
    Comment:"chitkara is a nice univercity 0"
  },
  {
    id:1,
    username:"Kapil",
    Comment: "Shimla is a very nyc place !!"
  },
  {
    id:1,
    username:"Kalpesh",
    Comment: "Kalpesh is from khairipaika  !!"
  }
]

app.get('/bold',(req,res)=>{
  
  res.render('Restful',{comments})
})
app.get('/bold/new',(req,res)=>{
  
  res.render('new',{comments})
})
app.post("/bold",(req,res)=>{
    console.log(req.body,"rrr");
    let {username,Comment} =req.body
    comments.push({username,Comment})
    res.redirect('/bold')
})
app.listen(5000,()=>{
  console.log("server.....");
})




