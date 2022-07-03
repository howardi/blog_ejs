// Imports
const express = require('express');
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static('public'));

app.set('view engine', 'ejs')

const port = process.env.PORT || 5001;
app.listen(port, function(){
    console.log(`App listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about_us', (req, res) => {
    res.render('about_us')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

