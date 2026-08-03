const UserModel = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async(req, res) => {
    const token = req.cookies.token
    if(!token) {
        return res.json({status: false})
    } else {
        const user = await UserModel.findById(data.id)
        if(user) return res.json({status: true, user: user.username})
            else return res.json({status: false});
    }
}