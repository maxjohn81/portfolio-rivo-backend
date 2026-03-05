const express = require('express')
const router = express.Router()
const imagesController = require('../controllers/imagesController')

// router.use(verifyToken)

router.get('/toutes_images', imagesController.getAllImages)
router.post('/creer_image', imagesController.createImage)
router.get('/image/:id', imagesController.getImageById)
router.put('/image/:id', imagesController.updateImage)
router.delete('/image/:id', imagesController.deleteImage)
router.get('/recherche', imagesController.getImagesByFilename)

module.exports = router
