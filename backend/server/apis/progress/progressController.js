const progressModel = require('./progressModel')

const add = async (req, res) => {
    try {
        let formData = req.body;
        let validation = "";
        if (!formData.trainerId) {
            validation += "trainerId  is required. ";
        }
        if (!formData.customerId) {
            validation += "customerId  is required. ";
        }
        if (!formData.weight) {
            validation += "weight is required. ";
        }
        if (!formData.height) {
            validation += "height is required. ";
        }
        if (!formData.bodyFat) {
            validation += "Body Fat is required. ";
        }
        if (!formData.bmi) {
            validation += "BMI is required. ";
        }


        if (validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            });
        }


        let existingProgress = await progressModel.findOne({
            email: formData.email,
        });

        if (existingProgress) {
            return res.send({
                success: false,
                status: 400,
                message: "Progress altready exists with same client email!"
            });
        }


        let totalProgress = await progressModel.countDocuments();

        let newProgress = new progressModel();
        newProgress.autoId = totalProgress + 1;
        newProgress.clientName = formData.clientName;
        newProgress.email = formData.email;
        newProgress.weight = formData.weight;
        newProgress.height = formData.height;
        newProgress.bodyFat = formData.bodyFat;
         newProgress.customerId = formData.customerId;
        newProgress.trainerId = formData.trainerId;
        newProgress.bmi = formData.bmi;
        newProgress.status = formData.status || true;

        let savedProgress = await newProgress.save();

        return res.send({
            success: true,
            status: 201,
            message: "Progress Added Successfully",
            data: savedProgress
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
        const filter = { isDeleted: false }
        if (req.body.customerId) filter.customerId = req.body.customerId
        if (req.body.trainerId) filter.trainerId = req.body.trainerId

        let Progress = await progressModel.find(filter).populate("trainerId").populate("customerId")
        let total = await progressModel.countDocuments(filter)
        res.send({
            status: 200,
            success: true,
            data: Progress,
            message: "All Progress Loaded",
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
            let progress = await progressModel.findOne({ _id: req.body._id })
            if (!progress) {
                res.send({
                    success: false,
                    status: 404,
                    message: "progress Not Found"
                });
            }


            else {
                progress.clientName = req.body.clientName || progress.clientName;
                progress.email = req.body.email || progress.email;
                progress.bmi = req.body.bmi || progress.bmi;
                progress.weight = req.body.weight || progress.weight;
                progress.height = req.body.height || progress.height;
                progress.bodyFat = req.body.bodyFat || progress.bodyFat;
                if (req.body.progressName) {
                    progress.progressName = req.body.progressName
                }
                if (req.decoded.addedById) {
                    progress.updatedById = req.decoded.updatedById
                }
                progress.updatedAt = Date.now()
                let updatedprogress = await progress.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "progress Updated",
                    data: updatedprogress
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
            let progress = await progressModel.findOne({ _id: req.body._id })
            if (!progress) {
                res.send({
                    success: false,
                    status: 404,
                    message: "progress Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "progress Loaded Successfully",
                    data: progress
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
            let progress = await progressModel.findOne({ _id: req.body._id })
            if (!progress) {
                res.send({
                    success: false,
                    status: 404,
                    message: "progress not found"
                })
            }
            else {
                progress.isDeleted = true;
                await progress.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "progress deleted"
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
}
