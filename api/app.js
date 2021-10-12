const express = require('express');
const app = express()

app.get('/', (req, res) => {
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

module.exports = app