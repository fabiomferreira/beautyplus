import { Mongoose } from 'mongoose';

const mongoose = new Mongoose();


mongoose.connect('mongodb://localhost/beautyplus', { useNewUrlParser: true, useUnifiedTopology: true });

export const serviceSchema = new mongoose.Schema({
  name: String
});

export default mongoose;
