import express from 'express'
const router = express.Router()

const votes = {} // object, dictionary, hashtable


//GET /api/votes
router.get('/votes', (req, res) => {
    res.json(votes)
})

//POST /api/votes/<id>
router.post('/vote/:id', (req, res) => {
    let id = req.params.id
    if (votes[id] === undefined) {
        votes[id] = 1
    } else {
        votes[id] = votes[id] + 1
    }
    res.json({ votes: votes[id] })
})

export default router