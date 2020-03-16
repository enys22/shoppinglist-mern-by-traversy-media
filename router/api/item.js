const router = require('express').Router();

const Item = require('../../models/Item')

/// GET All Items
router.get('/',(req,res)=>{
    Item.find()
        .sort({date : 1})
        .then(items => res.json(items))
})

/// POST New Items
router.post('/',(req,res)=>{
    let newItem = new Item({
        name : req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})

// DELETE Item By ID
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=>res.json({deleteSuccess : true})))
        .catch(err => res.status(404).json({deleteSuccess : false}))
})

module.exports = router;