const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/dist', express.static('dist'))

app.get('/json', (req, res) => {
    res.sendFile(path.join(`${__dirname}/pages/json.html`))
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
