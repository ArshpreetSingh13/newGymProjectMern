const Joi = require('joi')
const trainerModel = require("./trainerModel");
const userModel = require("../user/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { uploadImg } = require("../../utilities/helper")

const add = async (req, res) => {
    let formData = req.body
    const email = formData.email?.trim().toLowerCase()
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        experience: Joi.string().required(),
        speacilization: Joi.string().required(),
        password: Joi.string().required(),
        about: Joi.string().required(),
        image: Joi.string().optional().allow(""),
        description: Joi.string().optional().allow(""),
    })
    const { error, value } = schema.validate({ ...req.body, email })
    console.log(error);

    if (error) {
        return res.send({
            success: false,
            status: 400,
            message: error.details[0].message
        })
    }
    if (!req.file) {
        return res.send({
            success: false,
            status: 400,
            message: "Image is required"
        })
    }
    else {
        let existingEmail = await userModel.findOne({ email: email })
        if (existingEmail) {
            res.send({
                success: false,
                status: 400,
                message: "Email Already Exist"
            })
        }
        else {
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
            newUser.name = formData.name
            newUser.password = bcrypt.hashSync(formData.password, saltRounds)
            newUser.phone = formData.phone
            newUser.userType = 2
            let savedUser = await newUser.save()
            let totalTrainer = await trainerModel.countDocuments()
            let newTrainer = new trainerModel()
            newTrainer.autoId = totalTrainer + 1
            newTrainer.name = formData.name
            newTrainer.email = email
            newTrainer.phone = formData.phone
            newTrainer.experience = formData.experience
            newTrainer.speacilization = formData.speacilization
            newTrainer.about = formData.about
            newTrainer.image = image
            newTrainer.userId = savedUser._id
            let savedTrainer = await newTrainer.save()
            savedUser.trainerId = await savedTrainer._id
            await newUser.save()
            return res.send({
                success: true,
                status: 201,
                message: " Trainer Added Successfully",
                date: savedTrainer
            }).catch((err) => {
                console.log(err);
                res.send({
                    status: 500,
                    success: false,
                    message: err,
                })
            })
        }
    }
}


// try {
//     let formData = req.body
//     let validation = ""
//     if (!formData.name) {
//         validation += "name is required "
//     }
//     if (!req.file) {
//         validation += " profile is required"
//     }
//     if (!formData.phone) {
//         validation += " phone is required "
//     }
//     if (!formData.email) {
//         validation += " email is required "
//     }
//     if (!formData.experience) {
//         validation += " experience is required "
//     }
//     if (!formData.speacilization) {
//         validation += " speacilization is required "
//     }
//     if (!formData.password) {
//         validation += " password is required "
//     }
//     if (!formData.about) {
//         validation += " about is required "
//     }
//     if (!!validation) {
//         res.send({
//             success: false,
//             status: 400,
//             message: validation
//         })
//     }
//     else {
//         let existingEmail = await userModel.findOne({ email: formData.email })
//         if (existingEmail) {
//             res.send({
//                 success: false,
//                 status: 400,
//                 message: "Email Already Exist"
//             })
//         }
// else {
// console.log(req.file);


// let image = "no_image.jpg";
// try {
//     const imageUrl = await uploadImg(req.file.buffer, `fitlab/${Date.now()}`);
//     image = imageUrl;
// } catch (err) {
//     console.error("Image upload failed:", err);
//     return res.json({ success: false, status: 500, message: "Profile upload failed" });
// }

//         else {
//             // Create User
//             let totalUsers = await userModel.countDocuments()
//             let newUser = new userModel()
//             newUser.autoId = totalUsers + 1
//             newUser.email = formData.email
//             newUser.name = formData.name
//             newUser.password = bcrypt.hashSync(formData.password, saltRounds)
//             newUser.phone = formData.phone
//             newUser.userType = 2
//             let savedUser = await newUser.save()
//             let totalTrainer = await trainerModel.countDocuments()
//             let newTrainer = new trainerModel()
//             newTrainer.autoId = totalTrainer + 1
//             newTrainer.name = formData.name
//             newTrainer.email = formData.email
//             newTrainer.phone = formData.phone
//             newTrainer.experience = formData.experience
//             newTrainer.speacilization = formData.speacilization
//             newTrainer.about = formData.about
//             newTrainer.image = image
//             newTrainer.userId = savedUser._id
//             let savedTrainer = await newTrainer.save()
//             savedUser.trainerId = await savedTrainer._id
//             await newUser.save()
//             return res.send({
//                 success: true,
//                 status: 201,
//                 message: " Trainer Added Successfully",
//                 date: savedTrainer
//             })
//         }
//     }
// } catch (error) {
//     console.log(error);
//     res.status(500).json({
//         success: false,
//         status: 500,
//         message: error.message
//     })
// }


const all = async (req, res) => {
    try {
        let trainers = await trainerModel.find({ isDeleted: false })
        let total = await trainerModel.countDocuments({ isDeleted: false })
        res.send({
            status: 200,
            success: true,
            data: trainers,
            message: "All Trainers Loaded",
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

const update = async (req, res) => {
     let image = "no_image.jpg";
            try {
                const imageUrl = await uploadImg(req.file.buffer, `fitlab/${Date.now()}`);
                image = imageUrl;
            } catch (err) {
                console.error("Image upload failed:", err);
                return res.json({ success: false, status: 500, message: "Profile upload failed" });
            }
    try {
        if (!req.body._id) {
            return res.send({
                success: false,
                status: 400,
                message: "_id is required"
            })
        }
        else {
            let trainer = await trainerModel.findOne({ _id: req.body._id })
            if (!trainer) {
                res.send({
                    success: false,
                    status: 404,
                    message: "trainer Not Found"
                })
            }
            else {
                if (req.body.name) {
                    trainer.name = req.body.name
                }
                if (req.file) {
                    trainer.image = image
                }
                if (req.decoded.addedById) {
                    trainer.updatedById = req.decoded.updatedById
                }
                trainer.updatedAt = Date.now()
                let updatedTrainer = await trainer.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "trainer Updated",
                    data: updatedTrainer
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
            let trainer = await trainerModel.findOne({ _id: req.body._id })
            if (!trainer) {
                res.send({
                    success: false,
                    status: 404,
                    message: "trainer not found"
                })
            }
            else {
                trainer.isDeleted = true;
                await trainer.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "trainer deleted"
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
            let trainer = await trainerModel.findOne({ _id: req.body._id })
            if (!trainer) {
                res.send({
                    success: false,
                    status: 404,
                    message: "trainer Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "trainer Loaded Successfully",
                    data: trainer
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

module.exports = {
    add, all, update, softDelete, single
}
