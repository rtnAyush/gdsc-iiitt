import mongoose from 'mongoose';

const connectDb =
  (handler: Function) => async (req: Request, res: Response) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI as string);
    return handler(req, res);
  };

export default connectDb;


