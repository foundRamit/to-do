const express = require('express');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api/tasks', userRoutes);

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

module.exports = app;
