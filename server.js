const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// MAIN ROUTE WITH HIDDEN REDIRECT LOGIC
app.get("/", (req, res) => {
  const promo = req.query.promo;

  // -----------------------------------------------------------
  // CHANGE #1 — Replace "men-shoes" with YOUR KEYWORD PARAMETER
  // CHANGE #2 — Replace "offer-men-shoes.html" with YOUR LANDING PAGE FILE
  // -----------------------------------------------------------
  if (promo === "rojabet") {
    return res.sendFile(path.join(__dirname, "public","lander.html","dex.html"));
  }

  // -----------------------------------------------------------
  // CHANGE #3 — Replace "index.html" with YOUR HOMEPAGE FILE
  // -----------------------------------------------------------
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
