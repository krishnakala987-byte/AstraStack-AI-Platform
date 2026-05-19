const express = require("express");
const client = require("prom-client");

const app = express();

app.use(express.json());

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const register = client.register;

app.get("/", (req, res) => {
  res.send("auth-service running on port 3000");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log("auth-service running on port 3000");
});