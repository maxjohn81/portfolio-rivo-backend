const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors()); // ton front React
app.use(express.json());

const PORT = 5000;
const SECRET_KEY = "monsecret123";

// Admin hardcodé
const adminUser = {
    email: "rivoandriharisoa@gmail.com",
    password: bcrypt.hashSync("03750119", 8)
};

// Route login
app.post("/api/admin/login", (req, res) => {
    const { email, password } = req.body;
    if (email !== adminUser.email) return res.status(401).json({ message: "Email incorrect" });

    const passwordIsValid = bcrypt.compareSync(password, adminUser.password);
    if (!passwordIsValid) return res.status(401).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign({ email: adminUser.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

// Middleware pour protéger les routes admin
function verifyToken(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Aucun token fourni" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token invalide" });
    }
}

// Exemple route protégée
app.get("/api/admin/dashboard", verifyToken, (req, res) => {
    res.json({ message: `Bienvenue ${req.user.email} sur le dashboard` });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));