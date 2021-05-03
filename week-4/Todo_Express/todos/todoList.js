const express = require('express');
const todoList = express.Router();
const {
     v4: uuidv4
} = require('uuid');


const todoItems = [{
          name: "Groceries",
          description: "Apples, Bananas, Cerael, Bread, Peanut Butter, Milk",
          imageUrl: "https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
          completed: false,
          _id: uuidv4()
     },

     {
          name: "Study",
          description: "FSW-125, FSW-130",
          imageUrl: "https://cdn.corporatefinanceinstitute.com/assets/10-Poor-Study-Habits-Opener.jpeg",
          completed: false,
          _id: uuidv4()
     },

     {
          name: "Workout",
          description: "I know you don't want to, but do it anyway...",
          imageUrl: "https://cdn.prod.openfit.com/uploads/2017/09/10-Reasons-Why-You-Hate-Working-Out-in-post-1.jpg",
          completed: false,
          _id: uuidv4()
     },

     {
          name: "Go to bank",
          description: "Deposit your millions",
          imageUrl: "https://qph.fs.quoracdn.net/main-qimg-29552f0852b5fbd7846a0dbd2017faa4.webp",
          completed: false,
          _id: uuidv4()
     },
]


// GET ALL & POST
todoList.route('/')
     .get((req, res) => {
          res.send(todoItems)
     })
     .post((req, res) => {
          const newTodo = req.body
          newTodo._id = uuidv4()
          todoItems.push(newTodo)
          res.send(`Added ${newTodo.name} to your todo list!`)
     });

//GET ONLY ONE
todoList.get("/:todoId", (req, res) => {
     const todoId = req.params.todoId
     const todo = req.body
     todo._id = uuidv4()
     const foundTodo = todoItems.find(todo => todo._id === todoId)
     res.send(foundTodo)
});

// DELETE
todoList.delete("/:todoId", (req, res) => {
     const todoId = req.params.todoId
     const todo = req.body
     todo._id = uuidv4()
     const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
     todoItems.splice(todoIndex, 1)
     res.send(`Item Deleted!`)
});

// UPDATE - PUT
todoList.put("/:todoId", (req, res) => {
     const todoId = req.params.todoId
     const todo = req.body
     todo._id = uuidv4()
     const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
     const updatedTodo = Object.assign(todoIndex[todoIndex], req.body)
     res.send(updatedTodo)
});

module.exports = todoList