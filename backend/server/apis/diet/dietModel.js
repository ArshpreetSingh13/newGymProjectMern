const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'trainer', required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer',required:true },
    batchRegistrationId: { type: mongoose.Schema.Types.ObjectId, ref: 'batchRegistration', required: true },
    dietType: { type: String, default: "" },
    restrictions: { type: String, default: "" },
    caloriesIntake: { type: String, default: "" },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})



module.exports = new mongoose.model("diet", dietSchema)