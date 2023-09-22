const express = require('express')
const router = express.Router()

const questionDb = require('../model/Question')


router.post('/' ,   async(req , res)=>{
    try {
        await  questionDb.create ({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,
            user: req.body.user
        })
        .then(()=>{
            res.status(201).send({
                status:true ,
                message: 'Question Added Successfully'
            })
        })
    } catch (error) {
        res.status(400).send({
            status: false ,
            message: 'Bad Format'
        })
    }
})


router.get('/' , async(req, res)=>{
    try {
       await questionDb.aggregate([
            {
                $lookup: {
                    from: 'answers' ,
                    localField: '_id' ,
                    foreignField: 'questionId' ,
                    as: 'allAnswers'
                }
            }
        ]).exec().then((doc)=>{res.status(200).send(doc)})
        .catch((e)=>{
            res.status(500).send({
                status: false ,
                message : 'Unable to get the question Details'
            }
            )
        })
    } catch (error) {
        res.status(500).send({
            status: false ,
            message : 'Unexpected Error'
        }
        )
    }
})

module.exports = router