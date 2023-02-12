const router = require('express').Router();

const reservationModel = require('../models/reservation');

router.post('/reservation/put-item', async (req, res) => {
    try {
        await reservationModel.updateOne({
            _id: req.body.date + 'T' + req.body.startTime + '.000Z'
        },
            {
                $set: {
                    date: req.body.date,
                    name: req.body.name,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                }
            },
            { upsert: true })
        res.status(200).json({ saved: true });
    } catch (err) {
        console.log(err)
        res.json(err);
    }
})


router.post('/reservation/get-items', async (req, res) => {
    try {
        const allTodoItems = await reservationModel.find({
            date: req.body.date
        });
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
})


router.delete('/reservation/item/:id', async (req, res) => {
    try {
        await reservationModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    } catch (err) {
        res.json(err);
    }
})


module.exports = router;