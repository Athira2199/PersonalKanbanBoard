const express = require('express')
const path    = require('path')
const app     = express()

const PORT = 3000

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/index.js'))
app.use('/dashboard',require('./routes/dashboard'))

app.use('*',(req,res)=>{
    res.render('404')
})

app.listen(PORT,console.log(`listening to port ${PORT}`))