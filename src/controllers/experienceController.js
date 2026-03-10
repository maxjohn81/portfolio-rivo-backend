const asyncHandler = require("../utils/asyncHandler");

const {
  getAllExp,
  updateExp,
  createExp,
  deleteExp
} = require("../services/experienceService")

exports.getAllExp = asyncHandler(async (req, res) => {
  const experiences = await getAllExp();
  res.json(experiences);
});

exports.createExp = asyncHandler(async (req, res) => {
  const experience = await createExp(req.body);
  res.json({
    message: "Expérience ajouté avec succès",
    data: experience
  });
});

exports.updateExp = asyncHandler(async (req, res) => {
  const updatedExp = await updateExp(req.params.id, req.body);
  res.json({
    message: "Expérience mise à jour avec succès",
    data: updatedExp
  });
});

exports.deleteExp = asyncHandler(async (req, res) => {
  const deletedExp = await deleteExp(req.params.id);
  res.json({
    message: "Expérience supprimée avec succès",
    data: deletedExp
  });
});
