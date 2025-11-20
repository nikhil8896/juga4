const express = require("express");
const path = require("path");

const app = express();

// MAIN ROUTE FIRST
app.get("/", (req, res) => {
  const promo = req.query.promo;

  // If promo matched → send special page
  if (promo === "rojabet") {
    return res.sendFile(path.join(__dirname, "public", "lander", "dex.html"));
  }

  // Normal visitor → homepage
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

// STATIC FILES AFTER ROUTE (important)
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
