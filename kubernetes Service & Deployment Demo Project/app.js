const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Kubernetes Project</title></head><body><h1>Kubernetes Project</h1></body></html>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
