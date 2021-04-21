const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
     console.log(`App started on port: ${PORT}`)
})

// USER INFO DATA:
let users = [
     { name: 'Dave', location: 'Seattle' },
     { name: 'Tim', location: 'Denver' },
     { name: 'Colin', location: 'Manhattan' },
     { name: 'Stephanie', location: 'Austin'},
     { name: 'Mark', location: 'Boulder'},
];

// MOVIES LIST DATA:
let movies = [
     { name: 'Mortal Kombat' },
     { name: 'Godzilla vs. Kong' },
     { name: 'Tom and Jerry' },
     { name: 'The Croods 2' },
     { name: 'Wonder Woman 1984' },
];

// SHOWTIME DATA:
let showtimes = [
     { name: 'Mortal Kombat', showtime: '2:00 p.m.' },
     { name: 'Godzilla vs. Kong', showtime: '4:00 p.m.' },
     { name: 'Tom and Jerry', showtime: '6:00 p.m.' },
     { name: 'The Croods 2', showtime: '2:00 p.m.' },
     { name: 'Wonder Woman 1984', showtime: '4:00 p.m.' },
];

// TICKET PRICE DATA:
let tickets = [
     { name: 'Mortal Kombat', ticket: '$15'},
     { name: 'Godzilla vs. Kong', ticket: '$15'},
     { name: 'Tom and Jerry', ticket: '$10'},
     { name: 'The Croods 2', ticket: '$10'},
     { name: 'Wonder Woman 1984', ticket: '$15'},
];




// GET REQUESTS -------
// USERS:
app.get('/users', (req, res) => {
     res.send(users)
})

// MOVIES:
app.get('/movies', (req, res) => {
     res.send(movies)
})

// SHOWTIMES:
app.get('/showtimes', (req, res) => {
     res.send(showtimes)
})

// TICKETS:
app.get('/tickets', (req, res) => {
     res.send(tickets)
})

