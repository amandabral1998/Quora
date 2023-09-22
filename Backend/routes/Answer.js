const express = require('express')
const router = express.Router()

const answerDb = require('../model/Answer.js')


router.post('/' , async (req , res)=>{
    console.log(req.body);
    try {
        await answerDb.create({
            answer: req.body.answer ,
            questionId : req.body.questionId ,
            user : req.body.user
        })
        .then(()=>{res.status(200).send({
            status: true ,
            message: 'Answer added Successfully'
        })})
        .catch((e)=>{
            res.status(400).send({
                status: false ,
                message: 'Bad Request'
            })
        })
        
    } catch (error) {
        res.status(500).send({
            status: false ,
            message : 'Error while adding answer'
        })
    }
})


module.exports = router