const express = require('express');
const app = express()

const path = require('path');

//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
//app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
	console.log(__dirname + '/public/index.html')
	res.send('hola mi compa')
})


app.get('/hola', (req, res) => {
	res.json({
		hola: 'hello'
	})
})

app.get('/hello', (req, res) => {
	res.json({
		hola: 'hellouuuu'
	})
})

const port = process.env.PORT || 3000
const listen = app.listen(port, () => console.log('App is listening in ' + port))
module.exports = listen

module.exports = app