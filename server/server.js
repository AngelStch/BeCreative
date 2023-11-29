const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const userRouter = require('./routes/UserRoute.js');
const imageStoryRoute = require('./routes/imageStoryRoute.js');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', userRouter);
app.use('/api/image-stories', imageStoryRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
