module.exports = (err, req, res, next) => {

  console.error(err);

  res.status(401).json({
    message: err.message || "Erreur serveur"
  });

};