import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("Visa Backend is running ✅");
});

// ✅ Payment verification route
app.post("/api/payment/verify", (req, res) => {
  const { transactionId, amount, status } = req.body || {};

  console.log("Payment received:", req.body);

  if (status === "SUCCESS") {
    return res.status(200).json({ message: "Payment verified successfully" });
  } else {
    return res.status(400).json({ message: "Payment failed or pending" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Your service is live 🎉");
});
