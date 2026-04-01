const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "vitalsync-api",
    uptime: process.uptime(),
    version: process.env.npm_package_version || "1.0.0",
    timestamp: new Date(),
  });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

app.get("/api/summary", (req, res) => {
  res.json({ totalActivities: 0 });
});

app.listen(3000, () => console.log("VitalSync API on :3000"));