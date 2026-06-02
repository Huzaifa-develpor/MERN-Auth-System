const userModel = require("../Models/authModel");
const bcrypt = require("bcrypt");
const getToken = require("../Service/authService");

// 1. REGISTER USER
const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ status: 400, message: "Email already registered" });
        }

        // Hash the password directly before creating instance
        const hashedPassword = await bcrypt.hash(password, 10);

        let registeruser = new userModel({
            name,
            email,
            password: hashedPassword // hashed password save hoga
        });

        const data = await registeruser.save();
        return res.status(200).send({ status: 200, message: "User Registered", data });

    } catch (err) {
        return res.status(500).send({ status: 500, message: "Something Went Wrong", err: err.message });
    }
};

// 2. LOGIN USER (Converted fully to Async/Await)
const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            // Frontend validation ke sath match karne ke liye message change kiya
            return res.send({ status: 401, message: "Invalid Credentials" });
        }

        // Ab ye await bina kisi issue ke chalega
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.send({ status: 401, message: "Invalid Credentials" });
        }

        const token = getToken(user._id);

        return res.send({
            status: 200,
            message: "Login Successful", // Frontend isi string ko check kar raha hai
            token
        });

    } catch (err) {
        return res.status(500).send({ status: 500, message: "Server Error", err: err.message });
    }
};

// 3. VIEW USERS
const viewUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).send({ status: 200, message: "Users Found", user: users });
    } catch (err) {
        return res.status(500).send({ status: 500, message: "Server Error", err: err.message });
    }
};

module.exports = { registerUser, loginUser, viewUsers };