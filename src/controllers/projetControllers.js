const asyncHandler = require("../utils/asyncHandler");
const {
  getAllProjets,
  createProjet,
  getProjetById,
  updateProjet,
  deleteProjet,
  getFeaturedProjets
} = require("../services/projetsService");

// Get projets
exports.getAllProjets = asyncHandler(async (req, res) => {
  const projets = await getAllProjets();
  res.json(projets);
});

// Create new projet
exports.creatProjets = asyncHandler(async (req, res) => {
  const newProjets = await createProjet(req.body);
  
  // c'est pour renvoyer les données avec celui qui vient d'être créé
  res.status(201).json({
    message: "Projet créé avec succès",
    data: newProjets
  });
  
  console.log("créé avec succès !");
});

// Get projet by ID
exports.getProjetById = asyncHandler(async (req, res) => {
  const projet = await getProjetById(req.params.id);
  res.json(projet);
});

// Update projet
exports.updateProjet = asyncHandler(async (req, res) => {
  const updatedProjet = await updateProjet(req.params.id, req.body);
  res.json({
    message: "Projet mis à jour avec succès",
    data: updatedProjet
  });
});

// Delete projet
exports.deleteProjet = asyncHandler(async (req, res) => {
  const deletedProjet = await deleteProjet(req.params.id);
  res.json({
    message: "Projet supprimé avec succès",
    data: deletedProjet
  });
});

// Get featured projets
exports.getFeaturedProjets = asyncHandler(async (req, res) => {
  const projets = await getFeaturedProjets();
  res.json(projets);
});