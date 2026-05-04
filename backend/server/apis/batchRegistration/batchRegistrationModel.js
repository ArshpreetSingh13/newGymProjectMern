const mongoose = require('mongoose');

const batchRegistrationSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'batch' },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null }, // Assigned upon admin approval
    approvalStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    plan: { type: String, default: "" },
    paymentMethod: { type: String, default: "" },
    paymentStatus: { type: String, default: "" },
    TransactionId: { type: Number, default: 0 },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    
    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})

module.exports = new mongoose.model("batchRegistration", batchRegistrationSchema)