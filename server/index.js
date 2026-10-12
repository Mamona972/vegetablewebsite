import "dotenv/config";
import app from "./server.js";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

const port = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});