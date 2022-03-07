import mongoose from 'mongoose';

export default async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected ${conn.connection.host}`);
};
