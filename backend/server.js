const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const internRoutes = require('./routes/internRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/interns', internRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT));
  })
  .catch(err => console.log(err));
