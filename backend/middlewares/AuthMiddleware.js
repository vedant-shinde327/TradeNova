const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
      });
    }

    const data = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await UserModel.findById(data.id);

    if (!user) {
      return res.status(401).json({
        status: false,
      });
    }

    res.status(200).json({
      status: true,
      user: user.username,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
    });
  }
};
