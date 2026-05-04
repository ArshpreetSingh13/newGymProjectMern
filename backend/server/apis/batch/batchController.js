const batchModel = require("./batchModel");


const add = async (req, res) => {
    try {
        let formData = req.body;
        let validation = "";

        if (!formData.batchName) {
            validation += "Batch name is required. ";
        }
        if (!formData.trainerAllot) {
            validation += "Trainer is required. ";
        }
        if (!formData.startDate) {
            validation += "Start date is required. ";
        }
        if (!formData.endDate) {
            validation += "End date is required. ";
        }
        if (!formData.totalSlot) {
            validation += "Total slots are required. ";
        }



        if (!formData.time) {
            validation += "Time is required. ";
        }
        if (!formData.sessionType) {
            validation += "Session type is required. ";
        }
        if (!formData.fees) {
            validation += "Fees is required. ";
        }

        if (validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            });
        }


        let existingBatch = await batchModel.findOne({
            batchName: formData.batchName,
            startDate: formData.startDate
        });

        if (existingBatch) {
            return res.send({
                success: false,
                status: 400,
                message: "Batch already exists with same name and start date!"
            });
        }


        let totalBatch = await batchModel.countDocuments();

        let newBatch = new batchModel();
        newBatch.autoId = totalBatch + 1;
        newBatch.batchName = formData.batchName;
        newBatch.trainerAllot = formData.trainerAllot;
        newBatch.startDate = formData.startDate;
        newBatch.endDate = formData.endDate;
        newBatch.totalSlots = formData.totalSlot;
        newBatch.time = formData.time;
        newBatch.sessionType = formData.sessionType;
        newBatch.fees = formData.fees;
        newBatch.status = formData.status || true;

        let savedBatch = await newBatch.save();

        return res.send({
            success: true,
            status: 201,
            message: "Batch Added Successfully",
            data: savedBatch
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        });
    }
};


const all = async (req, res) => {
    try {
        let Batches = await batchModel.find({ isDeleted: false }).populate("trainerAllot")
        let total = await batchModel.countDocuments({ isDeleted: false })
        res.send({
            status: 200,
            success: true,
            data: Batches,
            message: "All Batches Loaded",
            total: total
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
};

const update = async (req, res) => {
    try {
        if (!req.body._id) {
            return res.send({
                success: false,
                status: 400,
                message: "_id is required"
            })
        }
        else {
            let batch = await batchModel.findOne({ _id: req.body._id })
            if (!batch) {
                res.send({
                    success: false,
                    status: 404,
                    message: "batch Not Found"
                })
            }
            else {
                if (req.body.batchName) batch.batchName = req.body.batchName
                if (req.body.trainerAllot) batch.trainerAllot = req.body.trainerAllot
                if (req.body.startDate) batch.startDate = req.body.startDate
                if (req.body.endDate) batch.endDate = req.body.endDate
                if (req.body.totalSlot) batch.totalSlots = req.body.totalSlot
                if (req.body.time) batch.time = req.body.time
                if (req.body.sessionType) batch.sessionType = req.body.sessionType
                if (req.body.fees) batch.fees = req.body.fees
                if (req.decoded.addedById) {
                    batch.updatedById = req.decoded.updatedById
                }
                batch.updatedAt = Date.now()
                let updatedbatch = await batch.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "batch Updated",
                    data: updatedbatch
                })
            }
        }
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            message: err.message
        })
    }
};

const single = async (req, res) => {     //get single API
    try {
        if (!req.body._id) {
            return res.send({
                success: false,
                status: 400,
                message: "_id is required"
            })
        }
        else {
            let batch = await batchModel.findOne({ _id: req.body._id })
            if (!batch) {
                res.send({
                    success: false,
                    status: 404,
                    message: "batch Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "batch Loaded Successfully",
                    data: batch
                })
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

const softDelete = async (req, res) => {
    try {
        if (!req.body._id) {
            res.send({
                success: false,
                status: 404,
                message: "_id is required"
            })
        }
        else {
            let batch = await batchModel.findOne({ _id: req.body._id })
            if (!batch) {
                res.send({
                    success: false,
                    status: 404,
                    message: "batch not found"
                })
            }
            else {
                batch.isDeleted = true;
                await batch.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "batch deleted"
                })
            }
        }
    }
    catch (err) {
        res.json({
            success: false,
            status: 500,
            message: err.message
        })


    }
}

module.exports = {
    add, all, update, single, softDelete
};
