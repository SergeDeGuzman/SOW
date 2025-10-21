import pkg from "pg";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const { Pool } = pkg;
const app = express();

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
});

app.get("/", (req, res) => {
  res.send("Connected to database");
});

app.listen(process.env.PORT, () => {
  console.log(`Server on http://localhost:${process.env.PORT}`);
});
