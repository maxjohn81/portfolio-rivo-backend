const express = require('express')
const router = express.Router()
const projectController = require('../controllers/projetControllers')
const  { verifyToken }  = require("../middlewares/authMiddleware")

// router.use(verifyToken)

router.get('/tous_projets', projectController.getAllProjets)
router.post('/creer_projets', projectController.creatProjets)

module.exports = router