const prisma = require("../config/prisma")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "monsecret123";

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const admin = await prisma.administrateurs.findUnique({
            where: { email }
        })
        
        if (!admin) return res.status(401).json({ message: "Email incorrect" });
        
        const passwordIsValid = bcrypt.compareSync(password, admin.mot_de_passe);
        if (!passwordIsValid) return res.status(401).json({ message: "Mot de passe incorrect" });
        
        const token = jwt.sign({ email: admin.email }, SECRET_KEY, { expiresIn: "1h" });
        console.log(admin);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion", error: error.message })
    };
}