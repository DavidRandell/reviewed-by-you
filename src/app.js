const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

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

app.get('*', (req, res) => {
   res.render('404', {
      title: 'Empty Theatre, sorry!'
   })
})

app.listen(3000, () => {
   console.log('Server is up on port 3000') 
})

