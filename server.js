const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})




const usersRouter = require('./routes/users');
const sitesRouter = require('./routes/sites');
//admin
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');

app.use('/users', usersRouter);
app.use('/sites', sitesRouter);
//admin
app.use('/admin', adminRouter);
app.use('/auth', authRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

// process.on('unhandledRejection', err => {
//     console.log(`ERROR: ${err.message}`);
//     console.log('Shutting down server');
//     server.close(() => {
//         process.exit(1)
//     })
// })
