const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'trainer', required: true },
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true },
    batchRegistrationId: { type: mongoose.Schema.Types.ObjectId, ref: 'batchRegistration', required: true },
    excerciseName: { type: String, default: "" },
    sets: { type: Number, default: 0 },
    repetitions: { type: Number, default: 0 },
    duration: { type: String, default: 0 },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedById: { type: String, default: "" },
})

module.exports = new mongoose.model("excercise", exerciseSchema)