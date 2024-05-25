
let comments=
    [
        {
          "id": 1,
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": 1960
        },
        {
          "id": 2,
          "title": "1984",
          "author": "George Orwell",
          "year": 1949
        },
        {
          "id": 3,
          "title": "Moby-Dick",
          "author": "Herman Melville",
          "year": 1851
        },
        {
          "id": 4,
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": 1925
        },
        {
          "id": 5,
          "title": "War and Peace",
          "author": "Leo Tolstoy",
          "year": 1869
        },
        {
          "id": 6,
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": 1813
        },
        {
          "id": 7,
          "title": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "year": 1951
        },
        {
          "id": 8,
          "title": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "year": 1937
        },
        {
          "id": 9,
          "title": "Ulysses",
          "author": "James Joyce",
          "year": 2024
        }
]
let express = require('express')
let app = express()
app.use(express.urlencoded({extended:true}))
let methodOverride= require('method-override')
app.use(methodOverride('_method'))
 app.set('view engine','ejs')
app.get('/bond',(req,res)=>{
    res.render('index',{comments})
})
app.get('/bond/new',(req,res)=>{
  
  res.render('new',{comments})
})
app.post("/bond",(req,res)=>{
  console.log(req.body,"rrr");
  let {id,title,author,year} =req.body
  comments.push({id,title,author,year})
  res.redirect('/bond')
})
app.get('/bond/:id',(req,res)=>{
    let {id}=req.params
    console.log(id);
    let Data=comments.find((data)=>{return data.id==id})
    res.render('edit',{Data})
})
app.patch('/bond/:id',(req,res)=>{
    let {id}=req.params
    console.log(id);
    let {title,author,year}=req.body
    let data=comments.find((data)=>{return data.id==id})
    data.author=author
    data.title=title
    data.year=year
    console.log(data);
    res.redirect('/bond')

})
app.delete('/bond/:id',(req,res)=>{
  let {id}=req.params
  console.log(id);
  let data=comments.filter((data)=>{
    return data.id!=id
  })
  comments=data
  res.redirect('/bond')
})
app.listen(5000,()=>{
    console.log('server...');
})