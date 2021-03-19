const express = require('express');

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.get('/items', (req, res) => {

})

app.use((req, res) => res.status(404));