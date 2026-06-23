// Node.js Express server
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, "dist")));

// API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API", timestamp: new Date() });
});

// Serve the React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
