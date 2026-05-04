const dietModel = require('./dietModel')

const add = async (req, res) => {
    try {
        let formData = req.body;
        let validation = "";

        if (!formData.dietType) {
            validation += "Diet Type is required. ";
        }
        if (!formData.restrictions) {
            validation += "restrictions are required. ";
        }
        if (!formData.caloriesIntake) {
            validation += "Calories Intake is required. ";
        }

        if (validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            });
        }


        let existingDiet = await dietModel.findOne({
            dietType: formData.dietType,
        });

        if (existingDiet) {
            return res.send({
                success: false,
                status: 400,
                message: "Diet already exists with same type!"
            });
        }


        let totalDiet = await dietModel.countDocuments();

        let newDiet = new dietModel();
        newDiet.autoId = totalDiet + 1;
        newDiet.trainerId = formData.trainerId; newDiet.batchRegistrationId = formData.batchRegistrationId;
        newDiet.customerId = formData.customerId
        newDiet.dietType = formData.dietType;
        newDiet.restrictions = formData.restrictions;
        newDiet.caloriesIntake = formData.caloriesIntake;
        newDiet.status = formData.status || true;

        let savedDiet = await newDiet.save();

        return res.send({
            success: true,
            status: 201,
            message: "Diet Added Successfully",
            data: savedDiet
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

        let Diet = await dietModel.find(filter).populate("trainerId").populate("customerId")
        let total = await dietModel.countDocuments(filter)
        res.send({
            status: 200,
            success: true,
            data: Diet,
            message: "All Diet Loaded",
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
            let diet = await dietModel.findOne({ _id: req.body._id })
            if (!diet) {
                res.send({
                    success: false,
                    status: 404,
                    message: "diet Not Found"
                })
            }
            else {
                diet.dietType = req.body.dietType || diet.dietType;
                diet.restrictions = req.body.restrictions || diet.restrictions;
                diet.caloriesIntake = req.body.caloriesIntake || diet.caloriesIntake;
                if (req.body.dietType) {
                    diet.dietType = req.body.dietType
                }
                if (req.decoded.addedById) {
                    diet.updatedById = req.decoded.updatedById
                }
                diet.updatedAt = Date.now()
                let updatedDiet = await diet.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "diet Updated",
                    data: updatedDiet
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
            let diet = await dietModel.findOne({ _id: req.body._id })
            if (!diet) {
                res.send({
                    success: false,
                    status: 404,
                    message: "diet Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "diet Loaded Successfully",
                    data: diet
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
            let diet = await dietModel.findOne({ _id: req.body._id })
            if (!diet) {
                res.send({
                    success: false,
                    status: 404,
                    message: "diet not found"
                })
            }
            else {
                diet.isDeleted = true;
                await diet.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "diet deleted"
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
    add, all, update,single, softDelete
}

