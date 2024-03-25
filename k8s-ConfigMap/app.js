const express = require('express');
const app = express();
const port=process.env.PORT;

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Kubernetes Project</title></head><body><h1>Kubernetes Project</h1></body></html>');
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
