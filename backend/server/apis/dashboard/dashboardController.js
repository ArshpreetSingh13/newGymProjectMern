const Trainer = require("../trainer/trainerModel")
const Customer = require("../customer/customerModel")
const Batch = require("../batch/batchModel")
const Diet = require("../diet/dietModel")
const Workout = require("../excercise/excerciseModel")
// const BatchRegistration = require("../batchRegistration/batchRegistrationModel")
// const Diet = require("../diet/dietModel")
// const Excercise = require("../excercise/excerciseModel")
const Membership = require("../membership/membershipPlanModel")
// const Payment = require("../payment/paymentModel")


const adminDashboard = async (req, res) => {
    let totalTrainers = await Trainer.countDocuments({ isDeleted: false })
    let totalBatches = await Batch.countDocuments({ isDeleted: false })
    let totalCustomers = await Customer.countDocuments({ isDeleted: false })
    let totalMemberships = await Membership.countDocuments({ isDeleted: false })


    res.send({
        status: 200,
        success: true,
        message: "Dashboard Data Loaded",
        totalTrainers: totalTrainers,
        totalBatches: totalBatches,
        totalCustomers: totalCustomers,
        totalMemberships: totalMemberships

    })
}

const trainerDashboard = async (req, res) => {
    let totalCustomers = await Customer.countDocuments({ isDeleted: false })
    // let totalDiet = await Diet.countDocuments({ isDeleted: false })
    // let totalWorkout = await Workout.countDocuments({ isDeleted: false })


    res.send({
        status: 200,
        success: true,
        message: "Dashboard Data Loaded",
        // totalDiet: totalDiet,
        totalCustomers: totalCustomers,
        // totalWorkout: totalWorkout,
    })
}

module.exports = {
    adminDashboard, trainerDashboard
}






