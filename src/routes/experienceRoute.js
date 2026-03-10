const express = require("express")
const router = express.Router();

const experienceController = require("../controllers/experienceController")


router.get("/tous_experiences", experienceController.getAllExp)
router.post("/creer_experience", experienceController.createExp)
router.put("/experience/:id", experienceController.updateExp)
router.delete("/experience/:id", experienceController.deleteExp)


module.exports = router;