const mongoose = require('mongoose');

const membershipPlanSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    duration: { type: String, default: "" },
    price: { type: Number, default: 0 },
    description: { type: String, default: "" },
    features: { type: String, default: "" },
    discount: { type: Number, deafult: 0 },
    onhold: { type: Boolean, deafult: false },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})

module.exports = new mongoose.model("membershipPlan", membershipPlanSchema)