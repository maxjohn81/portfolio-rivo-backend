const prisma = require("../config/prisma")

// Recuperer toutes les SKILLS
const getAllSkills = async (data) => {
  const skills = await prisma.competences.findMany(
    {
      ...data,
      orderBy: {
        id: "desc"
      }
    }
  )

  return skills
}

// Creer un skill
const createSkill = async (data) => {
  return prisma.competences.create({ data })
}


// pour un update skill
const updateSkill = async (id, data) => {
  return prisma.competences.update({
    where: {
      id: parseInt(id)
    },
    data
  })
}


// Pour supprimer un skill
const deleteSkill = async (id) => {
  return prisma.competences.delete({
    where: {
      id: parseInt(id)
    }
  })
}



module.exports = {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
}