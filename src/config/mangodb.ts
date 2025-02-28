import mongoose from "mongoose";

const password = "Pass@12345";
const encodedPassword = encodeURIComponent(password);
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Nisha:${encodedPassword}@cluster0.wq1i1.mongodb.net/businessDB`
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
