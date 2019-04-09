const express = require('express')

const app = express()

app.use(express.static('public'));

// Define the views directory. It's "/views"
app.set('views', __dirname + '/views')
// Define the view engine: HBS
app.set('view engine', 'hbs')

// Route GET http://localhost:3000/
app.get('/', (req,res,next) => {
  let isItMorning = (new Date()).getHours() <= 12

  let data = {
    isItMorning,
    name: "Maxence",
    bootcamp: "Ironhack WebDev <strong>Lisbon</strong>",
    cities: ['Madrid','Barcelona','Paris','Amsterdam','Berlin','Lisbon'],
  };

  // Render the file "/views/index.hbs"
  res.render('index', data)
})

// Route GET http://localhost:3000/best-teacher
app.get('/best-teacher', (req,res,next) => {
  let teachers = ['Joaquim','Maxence','Mostafa']
  let randomIndex = Math.floor(Math.random()*teachers.length)
  let randomName = teachers[randomIndex]

  // Render the file "/views/best-teacher.hbs"
  res.render('best-teacher', {
    name: randomName,
  })
})


app.listen(3000, () => {
  console.log("App running on http://localhost:3000")
})