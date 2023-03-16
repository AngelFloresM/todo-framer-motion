import { Schema, model } from 'mongoose';

const TODOSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const TODOModel = new model('TODO', TODOSchema);

export default TODOModel;
