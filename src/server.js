const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
const projetRoutes = require("./routes/projetRoute")

const app = express();
// Autoriser uniquement ton front dev et prod
// const allowedOrigins = [
//   "http://localhost:5173", // React dev
//   "https://portfolio-rivo-andriharisoa.vercel.app" // frontend prod
// ];


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilisation des routes
app.use("/api/admin", adminRoutes);
app.use("/api/projets", projetRoutes)

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));