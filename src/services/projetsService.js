const prisma = require("../config/prisma");

const getAllProjets = async (data) => {
  return prisma.projets.findMany({
    ...data,
    orderBy: { date_creation: "desc" }
  });
};

const createProjet = async (data) => {
  return prisma.projets.create({
    data
  });
};

const getProjetById = async (id) => {
  const projet = await prisma.projets.findUnique({
    where: { id: parseInt(id) }
  });
  
  if (!projet) {
    throw new Error("Projet non trouvé");
  }
  
  return projet;
};

const updateProjet = async (id, data) => {
  return prisma.projets.update({
    where: { id: parseInt(id) },
    data
  });
};

const deleteProjet = async (id) => {
  return prisma.projets.delete({
    where: { id: parseInt(id) }
  });
};

const getFeaturedProjets = async (data) => {
  return prisma.projets.findMany({
    ...data,
    where: { mis_en_avant: true },
    orderBy: { ordre_affichage: "asc" }
  });
};

module.exports = {
  getAllProjets,
  createProjet,
  getProjetById,
  updateProjet,
  deleteProjet,
  getFeaturedProjets
};
