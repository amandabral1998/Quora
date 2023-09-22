const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const db = require('.//db')
const router = require('../Backend/routes/main')
db.connect()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



// app.use((req , res , next)=>{
//     req.header('Access-Control-Allow-Origin' , "*")
//     req.header('Access-Control-Allow-Headers' , "*")
//     next()
// })


// serving static file for backend
// app.use('/uploads' , express.static(path.join(__dirname , '/../uploads')))
// serving static file for frontend
// app.use('/uploads' , express.static(path.join(__dirname , '/../QuoraApp/build')))


// app.get('*' , (req , res)=>{
//     try {
//         res.sendFile(path.join(`${__dirname} /../QuoraApp/build/index.html`))
//     } catch (error) {
//         res.send('Oops! Unexpected Error' , error)
//     }
// })


app.use('/api' , router)



app.listen(process.env.PORT || 3000  , ()=>{
    console.log('Server Started');
})