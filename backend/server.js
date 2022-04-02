import express from 'express';
import data from './data.js';

// ekhane express ekta object
// express object er method GET&POST

const app = express();

// GET method er 2 ta peramiter ache
// get method kaj kore emon vabe , ekhane /api/products link e pele response porbe
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// backend server kon port e run korbe seta likhe dite hobe
// karon 3000 port e frontend run kortese seta amra dekhechi
// tai server run korar jonne 5000 port select kore dilam
// eita iccche moto dea jabe
const port = process.env.PORT || 5000;
// app.listen er maddhome server start hobe & ready to response for frontend

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
