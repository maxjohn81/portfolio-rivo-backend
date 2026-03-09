const express = require("express")
const router = express.Router()
const competenceController = require("../controllers/competenceController")


router.get("/tous_skills", competenceController.getAllSkills)
router.post("/creer_skill", competenceController.createSkill)
router.put("/skill/:id", competenceController.updateSkill)
router.delete("/skill/:id", competenceController.deleteSkill)


module.exports = router