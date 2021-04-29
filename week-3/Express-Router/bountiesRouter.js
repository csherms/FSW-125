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


bountiesRouter.route('/')
.get((req, res) => {
     res.send(bounties)
})
.post((req, res) => {
     const newBounty = req.body
     newBounty_id = uuidv4()
     bounties.push(newBounty)
     res.send(`Added ${newBounty.firstName} ${newBounty.lastName} to bounty list!`)
})
module.exports = bountiesRouter;