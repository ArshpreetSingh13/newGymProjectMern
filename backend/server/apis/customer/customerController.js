const customerModel = require("./customerModel")
const userModel = require("../user/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { uploadImg } = require("../../utilities/helper")

const register = async (req, res) => {
    try {
        let formData = req.body
        const email = formData.email?.trim().toLowerCase()
        let validation = ""
        if (!formData.name) {
            validation += "name is required"
        }
        if (!req.file) {
            validation += "file is required"
        }
        if (!formData.phone) {
            validation += "phone is required"
        }
        if (!email) {
            validation += " email is required "
        }
        if (!formData.gender) {
            validation += " gender is required "
        }
        if (!formData.address) {
            validation += " address is required "
        }
        if (!formData.password) {
            validation += " password is required "
        }
        if (!formData.goal) {
            validation += " goal is required "
        }
        if (!!validation) {
            res.send({
                success: false,
                status: 400,
                message: validation,
            })
        }
        else {
            let existingEmail = await userModel.findOne({ email: email })
            if (existingEmail) {
                res.send({
                    success: false,
                    status: 400,
                    message: "Email already exist"
                })
            } else {
                console.log(req.file);


                let image = "no_image.jpg";
                try {
                    const imageUrl = await uploadImg(req.file.buffer, `fitlab/${Date.now()}`);
                    image = imageUrl;
                } catch (err) {
                    console.error("Image upload failed:", err);
                    return res.json({ success: false, status: 500, message: "Profile upload failed" });
                }


                let totalUsers = await userModel.countDocuments()
                let newUser = new userModel()
                newUser.autoId = totalUsers + 1
                newUser.email = email
                newUser.phone = formData.phone
                newUser.name = formData.name
                newUser.password = bcrypt.hashSync(formData.password, saltRounds)
                newUser.userType = 3
                let savedUser = await newUser.save()

                let totalCustomers = await customerModel.countDocuments()
                let newCustomer = new customerModel()
                newCustomer.autoId = totalCustomers + 1
                newCustomer.email = email
                newCustomer.phone = formData.phone
                newCustomer.name = formData.name
                newCustomer.address = formData.address
                newCustomer.gender = formData.gender
                newCustomer.goal = formData.goal
                newCustomer.age = formData.age
                newCustomer.userId = savedUser._id
                newCustomer.image = image;
                let savedCustomer = await newCustomer.save()
                return res.send({
                    success: true,
                    status: 201,
                    message: "Customer registered succesfully",
                    data: savedCustomer
                })
            }
        }
    }
    catch (err) {
        res.send({
            success: false,
            status: 500,
            message: err.message
        })
    }
}



const all = async (req, res) => {
    try {
        let customers = await customerModel.find({ isDeleted: false })
        let total = await customerModel.countDocuments({ isDeleted: false })
        res.send({
            status: 200,
            success: true,
            data: customers,
            message: "All customers Loaded",
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

const single = async (req, res) => {     //get single API
    try {
        if (!req.body._id) {
            return res.send({
                success: false,
                status: 400,
                message: "_id is required"
            })
        }
        else {
            let customer = await customerModel.findOne({ userId: req.body._id })
            if (!customer) {
                res.send({
                    success: false,
                    status: 404,
                    message: "customer Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "customer Loaded Successfully",
                    data: customer
                })
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

const softDelete = async (req, res) => {
    try {
        if (!req.body._id) {
            res.send({
                success: false,
                status: 404,
                message: "_id is required"
            })
        }
        else {
            let customer = await customerModel.findOne({ _id: req.body._id })
            if (!customer) {
                res.send({
                    success: false,
                    status: 404,
                    message: "customer not found"
                })
            }
            else {
                customer.isDeleted = true;
                await customer.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "customer deleted"
                })
            }
        }
    }
    catch (err) {
        res.json({
            success: false,
            status: 500,
            message: err.message
        })


    }
}

const update = async (req, res) => {
    try {
        if (!req.body._id) {
            return res.send({
                success: false,
                status: 400,
                message: "_id is required"
            })
        }
        else {
            let customer = await customerModel.findOne({ userId: req.body._id })
            if (!customer) {
                res.send({
                    success: false,
                    status: 404,
                    message: "customer Not Found"
                })
            }

            else {
                let image = "no_image.jpg";
                try {
                    const imageUrl = await uploadImg(req.file.buffer, `fitlab/${Date.now()}`);
                    image = imageUrl;
                } catch (err) {
                    console.error("Image upload failed:", err);
                    return res.json({ success: false, status: 500, message: "Profile upload failed" });
                }
                if (req.body.name) {
                    customer.name = req.body.name
                }
                if (req.file) {
                    customer.image = image
                }
                
                customer.updatedAt = Date.now()
                let updatedcustomer = await customer.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "customer Updated",
                    data: updatedcustomer
                })
            }
        }
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            message: err.message
        })
    }
}
module.exports = {
    register, all, single, softDelete, update
}
