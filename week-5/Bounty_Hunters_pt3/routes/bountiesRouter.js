const express = require('express');
const bountiesRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


// LIST OF STAR-WARS CHARACTERS THAT I AM HUNTING:
const bounties = [
    {
        firstName: "Salacious",
        lastName: "Crumb",
        living: true,
        bountyAmount: 500,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Jester",
        lastName: "Mereel",
        living: false,
        bountyAmount: 450,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "Rafa",
        lastName: "Martez",
        living: false,
        bountyAmount: 300,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Moralo",
        lastName: "Eval",
        living: true,
        bountyAmount: 120,
        type: "Sith",
        _id: uuidv4()
    }
];


// GET AND POST
bountiesRouter.route('/')
.get((req, res) => {
     res.send(bounties)
})
.post((req, res) => {
     const newBounty = req.body
     newBounty_id = uuidv4()
     bounties.push(newBounty)
     res.send(newBounty)
})

// DELETE
bountiesRouter.delete('/:bountyId', (req, res) => {
     const bountyId = req.params.bountyId
     const bounty = req.body
     bounty._id = uuidv4()
     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
     bounties.splice(bountyIndex, 1)
     res.send("Bounty was deleted!")
})

// UPDATE -- PUT
bountiesRouter.put('/:bountyId', (req, res) => {
     const bountyId = req.params.bountyId
     const bounty = req.body
     bounty._id = uuidv4()
     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
     const updatedBounty = Object.assign(bounties[bountyIndex], req.body) 
     res.send(updatedBounty)
})

module.exports = bountiesRouter;