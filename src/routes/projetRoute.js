const express = require('express')
const router = express.Router()
const projectController = require('../controllers/projetControllers')

// router.use(verifyToken)

router.get('/tous_projets', projectController.getAllProjets)
router.post('/creer_projets', projectController.creatProjets)
router.get('/projet/:id', projectController.getProjetById)
router.put('/projet/:id', projectController.updateProjet)
router.delete('/projet/:id', projectController.deleteProjet)
router.get('/projets_en_avant', projectController.getFeaturedProjets)

module.exports = router