const asyncHandler = require("../utils/asyncHandler")

const {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
} = require("../services/competenceService")



exports.getAllSkills = asyncHandler(async (req, res) => {
  const skills = await getAllSkills()
  res.json(skills)
})



exports.createSkill = asyncHandler(async (req, res) => {
  const skill = await createSkill(req.body)
  res.json({
    message: "Compétence ajouté avec succès",
    data: skill
  })
})


exports.updateSkill = asyncHandler(async (req, res) => {
  const skill = await updateSkill(req.params.id, req.body)

  res.json({
    message: "Mise à jour avec succès",
    data: skill
  })
})


exports.deleteSkill = asyncHandler(async (req, res) => {
  const skill = await deleteSkill(req.params.id)

  res.json({
    message: "Supprimer avec succès",
    data: skill
  })
})