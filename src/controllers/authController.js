const asyncHandler = require("../utils/asyncHandler");
const { login } = require("../services/adminService");

exports.login = asyncHandler(async (req, res) => {
  const result = await login(req.body);
  res.json(result);
});