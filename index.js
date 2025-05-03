const app = require('./app.js');

const connectDB = require('./config/db.js');

const PORT = 9001;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });