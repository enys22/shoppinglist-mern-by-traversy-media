const express = require ('express');
const mongoose = require ('mongoose');
const items = require ('./router/api/item')

const app = express();

const port = process.env.PORT || 5000

app.use(express.json());

app.use('/api/items',items)

const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(()=> console.log("MongoDB connected"))
    .catch(err => console.log(err))



app.listen(port,()=>console.log('Server running on port '+port));