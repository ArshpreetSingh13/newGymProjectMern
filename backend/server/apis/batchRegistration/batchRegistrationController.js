const batchRegistrationModel = require("./batchRegistrationModel");
const batchModel = require("../batch/batchModel");
const customerModel = require("../customer/customerModel");
const trainerModel = require("../trainer/trainerModel");

// Customer requests to join a batch
const addRequest = async (req, res) => {
    try {
        let formData = req.body;
        let validation = "";

        if (!formData.memberId) validation += "Member ID is required. ";
        if (!formData.batchId) validation += "Batch ID is required. ";
        if (!formData.plan) validation += "Plan is required. ";

        if (validation) {
            return res.send({ success: false, status: 400, message: validation });
        }

        // Check if batch exists
        const batchExists = await batchModel.findOne({ _id: formData.batchId, isDeleted: false });
        if (!batchExists) {
            return res.send({ success: false, status: 404, message: "Batch not found" });
        }

        // Check if already requested/enrolled
        const existingReq = await batchRegistrationModel.findOne({
            memberId: formData.memberId,
            batchId: formData.batchId,
            isDeleted: false
        });

        if (existingReq) {
            return res.send({ success: false, status: 400, message: "You have already registered or requested for this batch" });
        }

        let totalReqs = await batchRegistrationModel.countDocuments();
        let newReq = new batchRegistrationModel({
            autoId: totalReqs + 1,
            memberId: formData.memberId,
            batchId: formData.batchId,
            plan: formData.plan,
            paymentMethod: formData.paymentMethod || "",
            paymentStatus: formData.paymentStatus || "Pending",
            TransactionId: formData.TransactionId || 0,
            approvalStatus: "Pending" // Explicitly setting it
        });

        await newReq.save();

        res.send({
            success: true,
            status: 201,
            message: "Batch request submitted successfully",
            data: newReq
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, status: 500, message: err.message });
    }
};

// Admin approves request and assigns trainer
const approveRequest = async (req, res) => {
    try {
        let { registrationId, trainerId } = req.body;

        if (!registrationId) return res.send({ success: false, status: 400, message: "Registration ID is required" });
        if (!trainerId) return res.send({ success: false, status: 400, message: "Trainer ID is required to approve" });

        let reqObj = await batchRegistrationModel.findOne({ _id: registrationId, isDeleted: false });
        if (!reqObj) {
            return res.send({ success: false, status: 404, message: "Registration not found" });
        }

        let trainerExists = await trainerModel.findOne({ _id: trainerId, isDeleted: false });
        if (!trainerExists) {
            return res.send({ success: false, status: 404, message: "Trainer not found" });
        }

        reqObj.approvalStatus = "Approved";
        reqObj.trainerId = trainerId;
        reqObj.updatedAt = Date.now();

        await reqObj.save();

        res.send({
            success: true,
            status: 200,
            message: "Request approved and Trainer assigned successfully",
            data: reqObj
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, status: 500, message: err.message });
    }
};

// Get all registrations (For Admin)
const getAll = async (req, res) => {
    try {
        let reqs = await batchRegistrationModel.find(req.body)
            .populate("memberId")
            .populate("batchId")
            .populate("trainerId");

        res.send({ success: true, status: 200, message: "Loaded", data: reqs });
    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, status: 500, message: err.message });
    }
};

// Get registrations for a specific Trainer
const getByTrainer = async (req, res) => {
    try {
        if (!req.body.trainerId) return res.send({ success: false, status: 400, message: "Trainer ID required" });

        let reqs = await batchRegistrationModel.find({ trainerId: req.body.trainerId, isDeleted: false, approvalStatus: "Approved" })
            .populate("memberId")
            .populate("batchId");

        res.send({ success: true, status: 200, message: "Loaded", data: reqs });
    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, status: 500, message: err.message });
    }
};

// Get registrations for a specific Customer
const getByCustomer = async (req, res) => {
    try {
        if (!req.body.memberId) return res.send({ success: false, status: 400, message: "Member ID required" });

        let reqs = await batchRegistrationModel.find({ memberId: req.body.memberId, isDeleted: false })
            .populate("batchId")
            .populate("trainerId");

        res.send({ success: true, status: 200, message: "Loaded", data: reqs });
    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, status: 500, message: err.message });
    }
};


module.exports = {
    addRequest,
    approveRequest,
    getAll,
    getByTrainer,
    getByCustomer
};
