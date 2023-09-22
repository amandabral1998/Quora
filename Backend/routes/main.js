const express = require('express')
const router = express.Router()
const questionRouter = require('./Question.js')
const answerRouter = require('./Answer.js')



router.get('/' , (req , res)=>{
    res.send('This API is reserved for Quora App')
})


router.use('/question' , questionRouter)
router.use('/answer' , answerRouter)

module.exports = router