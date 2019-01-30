var express = require('express');
var router = express.Router();
var knex = require('../knex')

//get all users

router.get('/', (req, res, next) => {
  knex('customers')
.then((data) => {
  res.send(data)
})
})

//getoneuser
router.get('/:id', (req,res,next)=>{
  let id=req.params.id
  knex('customers')
  .where('id',id)
  .then(data=>{
    res.send(data)
  })
})

//postnewuser
router.post('/', (req,res,next)=>{
  knex('customers')
  .insert(req.body)
  .returning(['firstName','lastName','email', 'password', 'phone', 'gender',
              'preference', 'birthday', 'zipcode', 'referral', 'value1', 'value2', 'value3'])
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    console.log(err)
  })
})

//updateexistinguser
router.patch('/:id', function(req, res, next){
  knex('customers')
  .update(req.body)
  .where('id', req.params.id)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

//deleteexistinguser
router.delete('/:id', function(req, res, next){
  knex('customers')
  .where('id', req.params.id)
  .returning('*')
  .del()
  .then(data=>{
    res.sendStatus(200).send(data[0])
  })

})









module.exports = router;
