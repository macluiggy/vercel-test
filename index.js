require('./api/app.js')
const express = require('express')
const app = express()
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')))