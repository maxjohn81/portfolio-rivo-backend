
// on utilise ceci au lieu de try catch à chaque fois
module.exports = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}