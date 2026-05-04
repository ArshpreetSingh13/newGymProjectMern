const excerciseModel = require('./excerciseModel')

const add = async (req, res) => {
    try {
        let formData = req.body;
        let validation = "";

        if (!formData.trainerId) {
            validation += "trainerId  is required. ";
        }
        if (!formData.memberId) {
            validation += "memberId  is required. ";
        }
        if (!formData.excerciseName) {
            validation += "Excercise name is required. ";
        }
        if (!formData.sets) {
            validation += "sets are required. ";
        }
        if (!formData.repetitions) {
            validation += "repetitions are required. ";
        }
        if (!formData.duration) {
            validation += "duration is required. ";
        }
        

        if (validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            });
        }


        let existingExcercise = await excerciseModel.findOne({
            excerciseName: formData.excerciseName,
        });

        if (existingExcercise) {
            return res.send({
                success: false,
                status: 400,
                message: "Excercise altready exists with same name!"
            });
        }


        let totalExcercise = await excerciseModel.countDocuments();

        let newExcercise = new excerciseModel();
        newExcercise.autoId = totalExcercise + 1;
        newExcercise.excerciseName = formData.excerciseName;
        newExcercise.sets = formData.sets;
        newExcercise.repetitions = formData.repetitions;
        newExcercise.duration = formData.duration;
        newExcercise.memberId = formData.memberId;
        newExcercise.trainerId = formData.trainerId; newExcercise.batchRegistrationId = formData.batchRegistrationId;
        let savedExcercise = await newExcercise.save();
        return res.send({
            success: true,
            status: 201,
            message: "Excercise Added Successfully",
            data: savedExcercise
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
        if (req.body.memberId) filter.memberId = req.body.memberId
        if (req.body.trainerId) filter.trainerId = req.body.trainerId

        let Excercise = await excerciseModel.find(filter).populate("trainerId").populate("memberId")
        let total = await excerciseModel.countDocuments(filter)
        res.send({
            status: 200,
            success: true,
            data: Excercise,
            message: "All Excercise Loaded",
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
            let excercise = await excerciseModel.findOne({ _id: req.body._id })
            if (!excercise) {
                res.send({
                    success: false,
                    status: 404,
                    message: "excercise Not Found"
                });
            }


            else {
                excercise.excerciseName = req.body.excerciseName || excercise.excerciseName;
                excercise.sets = req.body.sets || excercise.sets;
                excercise.repetitions = req.body.repetitions || excercise.repetitions;
                excercise.duration = req.body.duration || excercise.duration;
                excercise.height = req.body.height || excercise.height;
                // excercise.bodyFat = req.body.bodyFat || excercise.bodyFat;
                if (req.body.excerciseName) {
                    excercise.excerciseName = req.body.excerciseName
                }
                if (req.decoded.addedById) {
                    excercise.updatedById = req.decoded.updatedById
                }
                excercise.updatedAt = Date.now()
                let updatedexcercise = await excercise.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "excercise Updated",
                    data: updatedexcercise
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
            let excercise = await excerciseModel.findOne({ _id: req.body._id })
            if (!excercise) {
                res.send({
                    success: false,
                    status: 404,
                    message: "excercise Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "excercises Loaded Successfully",
                    data: excercise
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
};

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
            let excercise = await excerciseModel.findOne({ _id: req.body._id })
            if (!excercise) {
                res.send({
                    success: false,
                    status: 404,
                    message: "excercise not found"
                })
            }
            else {
                excercise.isDeleted = true;
                await excercise.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "excercise deleted"
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
