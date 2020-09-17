const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const student = require('../model/student')
var cookieParser = require('cookie-parser');
const studentRouter = express.Router();

studentRouter.use(bodyParser.json());


studentRouter.route('/')
.post((req, res, next) => {
    console.log('recieved');
    console.log(req.body);

    student.create(req.body)
    .then((result)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(result);
        res.json(result)
    }, (err)=> next(err))
    .catch((err)=> next(err))

})
.get((req,res,next) => {
   
    student.find({})
    .then((student)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
      
        res.json(student);
    
    },(error)=> next(error))

    .catch((err)=> next(err))
    
})



studentRouter.route('/:stdId')
.get((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(req.params)
    student.find({ID : req.params.stdId})

    .then((result)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(result)
        res.json(result);
    })
})
.delete((req, res, next) => {
    console.log(req.params.stdId)
    student.findByIdAndRemove(req.params.stdId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});



module.exports = studentRouter;