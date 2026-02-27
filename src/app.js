import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import sendMail from "./controllers/sendMail.js";
dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// app.use("/api/payments", paymentRoutes);
// app.use("/api/admin", adminRoutes);
// app.post("/contactnew", async (req, res) => {
//   try {
//     console.log("BODY RECEIVED:", req.body); 
//     await sendMail(req.body);
//     res.status(200).json({ success: true, message: "Emails sent!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Email failed" });
//   }
// });

export default app;
