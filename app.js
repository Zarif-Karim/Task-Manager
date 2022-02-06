
const express = require('express');
const app = express();
const not_found = require('./middleware/not-found');
//database connection
const connectDB = require('./connect');
//environment variables
require('dotenv').config();

//user defined constants
const PORT = 5000;

//routes
const task = require('./routes/task');

//middlewares
app.use(express.static('./static'));
app.use(express.json());

app.use('/api/v1/tasks', task);

app.use(not_found);

const start_server = async (port, db_connection) => {
    try{
        await connectDB(db_connection);
        //start server
        app.listen(port,()=>console.log(`http://localhost:${port}`))
    } catch (error) {
        console.log('Failed to start server', error);
    }
}

start_server(PORT,process.env.MONGO_URI);