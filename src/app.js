const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Get Heroku port and assign
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Add Handlebars Templating Engine & Views & Partials location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set the static directory to serve 
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
   res.render('index', {
      title: 'Reviewed By You',
      subTitle: 'Make it reel!',
      scriptFile: 'js/main.js'
   })
})

app.get('/movie', (req, res) => {
   res.render('movie', {
      title: 'Reviewed By You',
      subTitle: 'Movie Details &amp; Reviews',
      scriptFile: 'js/movie.js'
   })
})

// Get and Dipslay Reviews

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
   { title: "Great Review", movieTitle: "Batman II" },
   { title: "Awesome Movie", movieTitle: "Titanic" }
 ]


// 404 error page
app.get('*', (req, res) => {
   res.render('404', {
      title: 'Empty Theatre, sorry!'
   })
})

app.listen(port, () => {
   console.log('Server is up on port' + port) 
})

