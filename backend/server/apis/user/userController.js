const userModel = require("./userModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const secretKey = process.env.secretKey

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const login = async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase()
        const password = req.body.password?.trim()
        let validation = ""
        if (!email) {
            validation += "email is required"
        }
        if (!password) {
            validation += "password is required"
        }
        if (!!validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            })
        }
        else {
            let user = await userModel.findOne({
                email: { $regex: `^${escapeRegex(email)}$`, $options: "i" }
            })
            if (!user) {
                return res.send({
                    success: false,
                    status: 404,
                    message: "User not found"
                })
            }
            else {
                let isMatch = bcrypt.compareSync(password, user.password)
                if (isMatch) {
                    if (user.isBlocked) {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "Your Account is Blocked"
                        })
                    }
                    else if (user.isDeleted) {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "User not found or deleted"
                        })
                    }
                    else if (user.status == false) {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "Your Account is inactive , Please Contact Admin"
                        })
                    }
                    else {
                        let payload = {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            userType: user.userType
                        }
                        let token = jwt.sign(payload, secretKey)
                        return res.send({
                            success: true,
                            status: 200,
                            message: "Login Successfull",
                            token: token,
                            data: user
                        })
                    }
                }
                else {
                    return res.send({
                        success: false,
                        status: 400,
                        message: "Invalid Password"
                    })

                }
            }
        }
    } catch (error) {
        console.log(error);
        res.send({
            status: 500,
            success: false,
            message: error.message
        })
    }
}

const changePassword = async (req, res) => {
    try {
        let validation = ""
        if (!req.body._id) {
            validation += "_id is required "
        }
        if (!req.body.currentPassword) {
            validation += "Current Password is required"
        }
        if (!req.body.newPassword) {
            validation += "New Password is required"
        }
        if (!req.body.confirmPassword) {
            validation += "Confirm Password is required"
        }

        if (!!validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            })
        }
        else {
            let user = await userModel.findOne({ _id: req.body._id })
            if (!user) {
                return res.send({
                    success: false,
                    status: 404,
                    message: "User not found"
                })
            }
            else {
                if (req.body.newPassword !== req.body.confirmPassword) {
                    res.send({
                        success: false,
                        status: 400,
                        message: "New Password & Confirm Passowrd does not match"
                    })
                }
                else {
                    let isMatch = bcrypt.compareSync(req.body.currentPassword, user.password)
                    if (isMatch) {
                        user.password = bcrypt.hashSync(req.body.newPassword, 10)
                        let savedUserd = await user.save()
                        return res.send({
                            success: true,
                            status: 200,
                            message: "Password Changed"
                        })
                    }
                    else {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "Invalid Password"
                        })
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.send({
            status: 500,
            success: false,
            message: error,
        })
    }
}

const all = async (req, res) => {
    try {
        let users = await userModel.find({ isDeleted: false })
        let total = await userModel.countDocuments({ isDeleted: false })
        res.send({
            status: 200,
            success: true,
            data: users,
            message: "All users Loaded",
            total: total
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

module.exports = {
    login, changePassword, all
}
