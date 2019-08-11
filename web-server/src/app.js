const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set-up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set-up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
   res.render('index', {
       'title': 'Weather',
       'name': 'Joseph Magsajo'
   })
})

app.get('/about', (req, res) => {
    res.render('about', {
        'title': 'About',
        'name': 'Joseph Magsajo'
    })
 })

 app.get('/help', (req, res) => {
    res.render('help', {
        'title': 'Help',
        'message': 'This is a help message!',
        'name': 'Joseph Magsajo'
    })
 })

// app.get('', (req, res) => {
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'joseph',
//         age: 99
//     })
// })

// app.get('/help', (req, res) => {
//     res.sendFile(publicDirectoryPath+'/help.html')
// }) 

// app.get('/about', (req, res) => {
//     res.send('About!')
// })

// app.get('/about', (req, res) => {
//     res.sendFile(publicDirectoryPath+'/about.html')
// }) 

app.get('/weather', (req, res) => {
    res.send('Weather!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})