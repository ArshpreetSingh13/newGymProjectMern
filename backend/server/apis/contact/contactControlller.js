const contactModel = require("./contactModel")
const Joi = require('joi')
const nodemailer = require("nodemailer");

const add = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        subject: Joi.string().required(),
        message: Joi.string().required(),
    })
    const { error, value } = schema.validate(req.body)
    if (error) {
        return res.send({
            success: false,
            status: 400,
            message: error.details[0].message
        })
    }
    else {
        let total = await contactModel.countDocuments()
        let newContact = new contactModel()
        newContact.autoId = total + 1
        newContact.name = value.name
        newContact.email = value.email
        newContact.phone = value.phone
        newContact.subject = value.subject
        newContact.message = value.message
        newContact.save().then((savedCategory) => {
            res.send({
                status: 201,
                success: true,
                message: "Message Send",
                data: newContact
            })
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


const update = async (req, res) => {
    try {
        const schema = Joi.object({
            _id: Joi.string().required(),
            reply: Joi.string().required(),
        })
        const { error, value } = schema.validate(req.body)
        if (error) {
            return res.send({
                success: false,
                status: 400,
                message: error.details[0].message
            })
        }
        else {
            let contact = await contactModel.findOne({ _id: value._id })
            if (!contact) {
                res.send({
                    success: false,
                    status: 404,
                    message: "Contact Not Found"
                })
            }
            else {  
                if (value.reply) {
                    contact.reply = value.reply
                }
                contact.status = "completed"
                if (req.decoded.updatedById) {
                    contact.updatedById = req.decoded.updatedById
                }
                const transporter = nodemailer.createTransport({
                    service: "Gmail",
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: true,
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                try {
                    const info = await transporter.sendMail({
                        from: '3saksham2512004@gmail.com', // sender address
                        to: contact.email, // list of recipients
                        subject: "Hello", // subject line
                        text: value.reply, // plain text body
                        html: "<b>Hello world?</b>", // HTML body
                    });

                    console.log("Message sent: %s", info.messageId);
                    // Preview URL is only available when using an Ethereal test account
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                } catch (err) {
                    console.error("Error while sending mail:", err);
                }


                contact.updatedAt = Date.now()
                let updatedContact = await contact.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "contact Updated",
                    data: updatedContact
                })
            }
        }
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            message: err.message
        })

    }
}

const all = async (req, res) => {
    try {
        let formData = req.body || {}
        let skip = 0
        let limit = 10000000
        formData.isDeleted = false
        if (formData.startPoint !== undefined) {
            skip = parseInt(formData.startPoint) || 0
            delete formData.startPoint
        }
        if (formData.limit !== undefined) {
            limit = parseInt(formData.limit) || 1000000
            delete formData.limit
        }
        let filter = { ...formData }
        if (formData.search) {
            filter.$or = [
                { name: { $regex: formData.search, $options: "i" } },
                { email: { $regex: formData.search, $options: "i" } }
            ]
            delete filter.search
        }
        let contacts = await contactModel.find(filter).skip(skip).limit(limit)
        let total = await contactModel.countDocuments(filter)
        res.send({
            status: 200,
            success: true,
            data: contacts,
            message: "All Queries Loaded",
            total: total
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

module.exports = {
    add, update, all
}