const express = require('express')

const app = express()

// Define the views directory. It's "/views"
app.set('views', __dirname + '/views')
// Define the view engine: HBS
app.set('view engine', 'hbs')

// Route GET http://localhost:3000/
app.get('/', (req,res,next) => {
  let data = {
    name: "Maxence",
    bootcamp: "Ironhack WebDev Lisbon"
  };

  // Render the file "/views/index.hbs"
  res.render('index', data)
})

app.listen(3000, () => {
  console.log("App running on http://localhost:3000")
})