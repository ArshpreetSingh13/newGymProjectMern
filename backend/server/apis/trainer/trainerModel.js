const mongoose = require('mongoose')
const trainerSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: Number, default: "" },
    experience: { type: String, default: "" },
    speacilization: { type: String, default: "" },
    image: { type: String, default: "" },
    about: { type: String, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },


})

module.exports = new mongoose.model("trainer", trainerSchema)