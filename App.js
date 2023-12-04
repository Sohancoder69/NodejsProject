const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 8070;

app.get('/', (req , res) => {
    res.status(200).json({'status': 'ok' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});