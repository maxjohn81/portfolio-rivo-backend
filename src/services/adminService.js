const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "monsecret123";

const login = async (data) => {
  const { email, password } = data;

  const admin = await prisma.administrateurs.findUnique({
    where: { email }
  });

  if (!admin) {
    throw new Error("Email incorrect");
  }

  const passwordIsValid = bcrypt.compareSync(password, admin.mot_de_passe);
  if (!passwordIsValid) {
    throw new Error("Mot de passe incorrect");
  }

  const token = jwt.sign({ email: admin.email, id: admin.id }, SECRET_KEY, { expiresIn: "7d" });


  return {
    token,
    admin: {
      id: admin.id,
      email: admin.email,
      nom: admin.nom
    }
  };
};

module.exports = {
  login
};
