const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<h1>🚀 CI/CD Pipeline Success!</h1>
              <p>Application Version: <b>1.0.0</b></p>
              <p>Running on Kubernetes Cluster.</p>`);
});

app.listen(PORT, () => {
    console.log(`Application started successfully on port ${PORT}`);
});