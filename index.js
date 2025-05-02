const app = require('./app.js');

const connectDB = require('./config/db.js');

const PORT = 4001;

connectDB();

app.listen(PORT , () =>{
    console.log(`server running at port ${PORT}`)
});