import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// ✅ Root check
app.get("/", (req, res) => {
  res.send("Visa Backend is running ✅");
});

// ✅ Payment verify route
app.post("/api/payment/verify", (req, res) => {
  console.log("Payment received:", req.body);
  res.json({ message: "Payment verified successfully" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
