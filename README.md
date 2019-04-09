# Express Intro HBS

## Step to reproduce

```sh
# Create the folder "express-intro-hbs" and go inside
$ mkdir express-intro-hbs
$ cd express-intro-hbs

# Create the file "package.json"
$ npm init

# Install the packages "express" and "hbs"
$ npm install express hbs --save

# Create a file "app.js" (can be also done manually without the command line)
$ touch app.js
```

## How to launch the project?
```sh
$ nodemon app.js
```

## How to create a new page?

Let's say we want a page http://localhost:3000/carrot that displays "I am the super 🥕"

First, we have to create a new route "GET /carrot"
```js
app.get('/carrot', (req,res,next) => {
  res.render('carrot') // render "/views/carrot.hbs"
})
```

Second, we have to create a file "/views/carrot.hbs"
```hbs
<p>I am the super 🥕</p>
```
