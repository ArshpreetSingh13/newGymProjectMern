const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    phone: { type: Number, default: "" },
    email: { type: String, default: "" },
    gender: { type: String, default: "" },
    address: { type: String, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },
    image: { type: String, default: "" },
    goal: { type: String, default: "" },
    age: { type: Number, default: 0 },


    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },
    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },


    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})

module.exports = new mongoose.model("customer", customerSchema)