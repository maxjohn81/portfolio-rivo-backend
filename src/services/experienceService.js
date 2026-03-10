const prisma = require("../config/prisma")


const getAllExp = async (data) => {
  return prisma.experiences.findMany({
    ...data,
    orderBy: {
      id: "desc"
    }
  })
}

const createExp = async (data) => {
  return prisma.experiences.create({
    data
  })
}

const updateExp = async (id, data) => {
  return prisma.experiences.update({
    where: {
      id: parseInt(id)
    },
    data
  })
}


const deleteExp = async (id) => {
  return prisma.experiences.delete({
    where: {
      id: parseInt(id)
    }
  })
}


module.exports = {
  getAllExp,
  updateExp,
  createExp,
  deleteExp
}