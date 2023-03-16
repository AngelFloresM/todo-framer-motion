import express from 'express';
import connectDB from './database/index.js';
import TODOModel from './database/TODOSchema.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();

app.get('/', async (req, res) => {
  const todo = new TODOModel({
    title: 'test',
    completed: false,
  });
  
  await todo.save();

  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});