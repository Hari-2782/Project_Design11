// app.js or server.js (your main app file)
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const materialRoutes = require("./routes/materialRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cloudinaryRoutes = require("./routes/cloudinaryRoutes");
const cartRoutes = require("./routes/Addcart");
const orderRoutes = require('./routes/orderRoutes');
const emailRoutes = require('./routes/emailRoutes'); // Import new routes
const feedbackRouter = require('./routes/feedbackRouter'); // Adjust the path as necessary

const { notFound, errorhandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api/users", userRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api", cartRoutes);
app.use("/api/cloudinary", cloudinaryRoutes);
app.use('/api', orderRoutes);
app.use('/api/emails', emailRoutes); // Use new routes
app.use('/api/feedback', feedbackRouter);


// Error handling middleware
app.use(notFound);
//app.use(errorhandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
