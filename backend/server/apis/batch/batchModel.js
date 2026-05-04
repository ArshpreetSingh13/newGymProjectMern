const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    batchName: { type: String, default: "" },
    trainerAllot: { type: mongoose.Schema.Types.ObjectId, ref: "trainer" },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },

    totalSlots: { type: String, default: "" },
    time: { type: String, default: "" },
    sessionType: { type: String, default: "" },
    fees: { type: String, default: ""},
 

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
 
    addedById: { type: String, default: "" },
    updatedBy: { type: String, default: "" },

})

module.exports = new mongoose.model("batch", batchSchema)