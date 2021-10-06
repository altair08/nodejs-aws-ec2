const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Node.js Express Demo App</h1> <h4>pipeline_status: Successfully updated</h4>');
})



app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})