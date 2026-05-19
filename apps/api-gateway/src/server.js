const express = require("express");
const client = require("prom-client");

const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const register = client.register;

app.get("/", (req, res) => {
  res.send("api-gateway running on port 8080");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(8080, () => {
  console.log("api-gateway running on port 8080");
});