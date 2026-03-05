const prisma = require("../config/prisma");

const getAllImages = async (data) => {
  return prisma.images.findMany({
    ...data,
    orderBy: { date_upload: "desc" }
  });
};

const createImage = async (data) => {
  return prisma.images.create({
    data
  });
};

const getImageById = async (id) => {
  const image = await prisma.images.findUnique({
    where: { id: parseInt(id) }
  });
  
  if (!image) {
    throw new Error("Image non trouvée");
  }
  
  return image;
};

const updateImage = async (id, data) => {
  return prisma.images.update({
    where: { id: parseInt(id) },
    data
  });
};

const deleteImage = async (id) => {
  return prisma.images.delete({
    where: { id: parseInt(id) }
  });
};

const getImagesByFilename = async (filename) => {
  return prisma.images.findMany({
    where: { nom_fichier: { contains: filename } },
    orderBy: { date_upload: "desc" }
  });
};

module.exports = {
  getAllImages,
  createImage,
  getImageById,
  updateImage,
  deleteImage,
  getImagesByFilename
};
