import express from "express";
import bodyParser from "body-parser";

const app = express();

// ✅ Proper body parsers
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Visa Backend is running ✅");
});

// ✅ Payment route
app.post("/api/payment/verify", (req, res) => {
  console.log("Payment received:", req.body);
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "No JSON body received" });
  }
  res.json({ message: "Payment verified successfully", data: req.body });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
