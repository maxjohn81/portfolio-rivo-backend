const prisma = require("../config/prisma")

// Recuperer toutes les educations
const getAllEducations = async (data) => {
  const educations = await prisma.educations.findMany(
    {
      ...data,
      orderBy: {
        id: "desc"
      }
    }
  )

  return educations
}

// Creer une education
const createEducation = async (data) => {
  return prisma.educations.create({ data })
}


// pour update une education
const updateEducation = async (id, data) => {
  return prisma.educations.update({
    where: {
      id: parseInt(id)
    },
    data
  })
}


// Pour supprimer une education
const deleteEducation = async (id) => {
  return prisma.educations.delete({
    where: {
      id: parseInt(id)
    }
  })
}



module.exports = {
  getAllEducations,
  createEducation,
  updateEducation,
  deleteEducation
}
