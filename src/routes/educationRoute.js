const express = require("express")
const router = express.Router()
const educationController = require("../controllers/educationController")


router.get("/tous_educations", educationController.getAllEducations)
router.post("/creer_education", educationController.createEducation)
router.put("/education/:id", educationController.updateEducation)
router.delete("/education/:id", educationController.deleteEducation)


module.exports = router
