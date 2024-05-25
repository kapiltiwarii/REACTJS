let express=require('express')
let app = express()
app.get('/',(req,res)=>{
    res.send('done')
})

app.listen(5000,()=>{
console.log("server.....");
}
)