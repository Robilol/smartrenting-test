const express = require('express');
const port = 4000;
const app = express();
var fetch = require('node-fetch')
const cors = require('cors')



app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
});

app.get('/', function (req, res) {
    res.status(200).send();
})

app.get('/characters', cors(), async (req, res) => {
    await res.status(200).send(await fetchData(`http://jsonplaceholder.typicode.com/photos?_start=${req.query.offset}&_limit=${req.query.limit}`))
})

async function fetchData(url) {
    let response = await fetch(url)
    return await response.json()
}