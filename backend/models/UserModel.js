const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "FullName is required"],
    },
    email: {
        type: String,
        required:[true, "Your email is required"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "your password is required"],
        unique: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

userSchema.pre("save", async function () {
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
    
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;