const router = require('express').Router();

const userModel = require('../models/user');


router.post('/user/put-item', async (req, res) => {
    try {
        const saveItem = await userModel.updateOne({
            userName: req.body.userName},
            { $setOnInsert : {password: req.body.password} },
            { upsert : true}
        )
        res.status(200).json(saveItem);
    } catch (err) {
        console.log(err)
        res.json(err);
    }
})

router.post('/user/get-items', async (req, res) => {
    try{
        console.log(req)
        const allMatchingItems = await userModel.find({
            userName: req.body.userName,
            password: req.body.password,
        });
        const userExists = allMatchingItems.length > 0
        res.status(200).json({ 'userExists': userExists})
    }catch(err){
        res.json(err);
    }
})


module.exports = router;