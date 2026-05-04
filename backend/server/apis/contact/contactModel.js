const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    subject: { type: String, default: "" },
    message: { type: String, default: "" },
    reply: { type: String, default: "" },


    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: String, default: "Pending" },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
    updatedById: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },

})

module.exports = new mongoose.model("contact", contactSchema)