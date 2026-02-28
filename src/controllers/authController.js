const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "monsecret123";
const adminUser = {
    email: "rivoandriharisoa@gmail.com",
    password: bcrypt.hashSync("03750119", 8)
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email !== adminUser.email) return res.status(401).json({ message: "Email incorrect" });

    const passwordIsValid = bcrypt.compareSync(password, adminUser.password);
    if (!passwordIsValid) return res.status(401).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign({ email: adminUser.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
};