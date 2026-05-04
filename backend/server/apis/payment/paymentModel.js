const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    memberId: { type: Number, default: 0 },
    batchId: { type: Number, default: 0 },
    memebershipPlan: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    paymentMethod: { type: string, default: "" },
    transactionId: { type: Number, default: 0 },
    paymentStatus: { type: String, default: "" },


    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})

module.exports = new mongoose.model("user", userSchema)