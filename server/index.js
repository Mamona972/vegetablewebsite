
import "dotenv/config";
import app from "./server.js";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

const port = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
