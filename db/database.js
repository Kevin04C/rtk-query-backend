import mongoose from 'mongoose';

export const connectedDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.BD_URL);
    console.log('bd connected');
  } catch (error) {
    console.log(error);
    console.log('Error to connected bd');
  }
};
