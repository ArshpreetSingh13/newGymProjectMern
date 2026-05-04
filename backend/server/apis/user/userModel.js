const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    phone: { type: Number, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    userType: { type: Number, default: "" }, // 1- Admin ; 2- Trainer; 3-Customer 
    trainerId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'trainer' },
    memberId: { type: Number, default: "" },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})

module.exports = new mongoose.model("user", userSchema)