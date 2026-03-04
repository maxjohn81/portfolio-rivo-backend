const prisma = require("../config/prisma")


// Get projets
exports.getAllProjets = async (req, res) => {
  try {
    const projets = await prisma.projets.findMany({ orderBy: { date_creation: "desc" } })
    
    res.json(projets)

  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des projets", error: error.message })
  }
}


// Create new projet
exports.creatProjets = async (req, res) => {
  try {
    const newProjets = await prisma.projets.create({
      data: {
        ...req.body
      }
    })

    // c'est pour renoyer les données avec celui qui vient d' être creé
    res.status(201).json({
      message: "Projet créé avec succès",
      data: newProjets
    });

    console.log("creer avec succès !");
    
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du projet", error: error.message })
  }
}