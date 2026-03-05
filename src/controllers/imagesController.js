const asyncHandler = require("../utils/asyncHandler");
const {
  getAllImages,
  createImage,
  getImageById,
  updateImage,
  deleteImage,
  getImagesByFilename
} = require("../services/imagesService");

// Get all images
exports.getAllImages = asyncHandler(async (req, res) => {
  const images = await getAllImages(req.query);
  res.json(images);
});

// Create new image
exports.createImage = asyncHandler(async (req, res) => {
  const newImage = await createImage(req.body);
  
  res.status(201).json({
    message: "Image créée avec succès",
    data: newImage
  });
  
  console.log("Image créée avec succès !");
});

// Get image by ID
exports.getImageById = asyncHandler(async (req, res) => {
  const image = await getImageById(req.params.id);
  res.json(image);
});

// Update image
exports.updateImage = asyncHandler(async (req, res) => {
  const updatedImage = await updateImage(req.params.id, req.body);
  res.json({
    message: "Image mise à jour avec succès",
    data: updatedImage
  });
});

// Delete image
exports.deleteImage = asyncHandler(async (req, res) => {
  const deletedImage = await deleteImage(req.params.id);
  res.json({
    message: "Image supprimée avec succès",
    data: deletedImage
  });
});

// Search images by filename
exports.getImagesByFilename = asyncHandler(async (req, res) => {
  const images = await getImagesByFilename(req.query.filename);
  res.json(images);
});
