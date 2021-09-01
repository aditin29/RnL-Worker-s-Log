const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true});

async () => {
    try {
      await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true})
    } catch (err) {
      console.log('error: ' + err)
    }
}



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


// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }


if (process.env.NODE_ENV === "production") {

        app.use(express.static(path.join(__dirname, "client/build")));
    
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}



const port = process.env.PORT || 5000;
//var host = process.env.HOST || '0.0.0.0';

app.listen(port, () => {
    console.log(`API running on port: ${port}`);
})

// process.on('unhandledRejection', err => {
//     console.log(`ERROR: ${err.message}`);
//     console.log('Shutting down server');
//     server.close(() => {
//         process.exit(1)
//     })
// })
