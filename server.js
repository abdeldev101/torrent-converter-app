const express = require('express');
const bodyParser = require('body-parser');
const createTorrent = require('create-torrent');

const app = express();

app.use(bodyParser.json());

app.post('/generate-torrent', (req, res) => {
    const { inputValue } = req.body;

    // Generate .torrent file FROM DIRECT HTTP LINK HERE
    const torrent = createTorrent({ name: inputValue });

    res.send(torrent);

})

app.listen(3000)
// test file 



