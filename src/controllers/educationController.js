const asyncHandler = require("../utils/asyncHandler")

const {
  getAllEducations,
  createEducation,
  updateEducation,
  deleteEducation
} = require("../services/educationService")



exports.getAllEducations = asyncHandler(async (req, res) => {
  const educations = await getAllEducations()
  res.json(educations)
})



exports.createEducation = asyncHandler(async (req, res) => {
  const education = await createEducation(req.body)
  res.json({
    message: "Education ajouté avec succès",
    data: education
  })
})


exports.updateEducation = asyncHandler(async (req, res) => {
  const education = await updateEducation(req.params.id, req.body)

  res.json({
    message: "Mise à jour avec succès",
    data: education
  })
})


exports.deleteEducation = asyncHandler(async (req, res) => {
  const education = await deleteEducation(req.params.id)

  res.json({
    message: "Supprimer avec succès",
    data: education
  })
})
