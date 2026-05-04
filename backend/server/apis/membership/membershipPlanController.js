const membershipPlanModel = require("./membershipPlanModel")

const add = async (req, res) => {
    try {
        let formData = req.body;
        let validation = "";

        if (!formData.name) {
            validation += "name is required. ";
        }
        if (!formData.duration) {
            validation += "duration is required. ";
        }
        if (!formData.price) {
            validation += "price is required. ";
        }
        if (!formData.description) {
            validation += "description is required. ";
        }
        // if (!formData.totalSlot) {
        //     validation += "Total slots are required. ";
        // }
        if (!formData.features) {
            validation += "features are required. ";
        }
        if (!formData.discount) {
            validation += "discount is required. ";
        }
        if (!formData.onhold) {
            validation += "onhold is required. ";
        }
        // if (!formData.fees) {
        //     validation += "Fees is required. ";
        // }

        if (validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            });
        }


        let existingMembership = await membershipPlanModel.findOne({
            name: formData.name
        });

        if (existingMembership) {
            return res.send({
                success: false,
                status: 400,
                message: "Membership already exists with same name!"
            });
        }


        let totalMembership = await membershipPlanModel.countDocuments();

        let newMembership = new membershipPlanModel();
        newMembership.autoId = totalMembership + 1;
        newMembership.name = formData.name;
        newMembership.duration = formData.duration;
        newMembership.price = formData.price;
        newMembership.description = formData.description;
        newMembership.features = formData.features;
        newMembership.discount = formData.discount;
        newMembership.onhold = formData.onhold;
        newMembership.status = formData.status || true;

        let savedMembership = await newMembership.save();

        return res.send({
            success: true,
            status: 201,
            message: "Membership Added Successfully",
            data: savedMembership
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
        let Memberships = await membershipPlanModel.find({ isDeleted: false })
        let total = await membershipPlanModel.countDocuments({ isDeleted: false })
        res.send({
            status: 200,
            success: true,
            data: Memberships,
            message: "All memberships Loaded",
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
            let membershipPlan = await membershipPlanModel.findOne({ _id: req.body._id })
            if (!membershipPlan) {
                res.send({
                    success: false,
                    status: 404,
                    message: "membershipPlan Not Found"
                })
            }
            else {
                if (req.body.membershipPlanName) {
                    membershipPlan.membershipPlanName = req.body.membershipPlanName
                }
                if (req.decoded.addedById) {
                    membershipPlan.updatedById = req.decoded.updatedById
                }
                membershipPlan.updatedAt = Date.now()
                let updatedmembershipPlan = await membershipPlan.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "membershipPlan Updated",
                    data: updatedmembershipPlan
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
            let membershipPlan = await membershipPlanModel.findOne({ _id: req.body._id })
            if (!membershipPlan) {
                res.send({
                    success: false,
                    status: 404,
                    message: "membershipPlan Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 200,
                    message: "membershipPlan Loaded Successfully",
                    data: membershipPlan
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
            let membershipPlan = await membershipPlanModel.findOne({ _id: req.body._id })
            if (!membershipPlan) {
                res.send({
                    success: false,
                    status: 404,
                    message: "membershipPlan not found"
                })
            }
            else {
                membershipPlan.isDeleted = true;
                await membershipPlan.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "membershipPlan deleted"
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