const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'trainer', required: true },

    weight: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    bodyFat: { type: Number, default: 0 },
    bmi: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedById: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null }
})

module.exports = new mongoose.model("progress", progressSchema)