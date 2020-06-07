const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.send('hello wordl');
});
app.post('/signup', (req, res)=>{
    console.log(req.body);
    res.status(200).send();
});


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});