const router = require("express").Router()
const multer = require("multer")
// const categoryController = require("../apis/category/categoryController")
// const productController = require('../apis/product/productController')
const userController = require('../apis/user/userController')
const trainerController = require('../apis/trainer/trainerController')
const batchController = require('../apis/batch/batchController')
const membershipController = require('../apis/membership/membershipPlanController')
const dashboardController = require('../apis/dashboard/dashboardController')
const customerController = require('../apis/customer/customerController')
const contactController = require('../apis/contact/contactControlller')
const progressController = require('../apis/progress/progressController')
const excerciseController = require('../apis/excercise/excerciseController')
const dietController = require('../apis/diet/dietController')
const batchRegistrationController = require('../apis/batchRegistration/batchRegistrationController')


// User Routes
router.post("/login", userController.login)
router.post("/batch/all", batchController.all);

router.use(require("../../server/middlewear/tokenChecker"))

router.post("/changePassword", userController.changePassword)
router.post("/users/all", userController.all);

//trainer routes
const Trainerstorage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "server/public/trainer");
  },
  filename: function (req, file, cb) {
    console.log("Multer:", file);
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + unique + file.originalname);
  },
});
const trainerUpload = multer({ storage: Trainerstorage });

router.post("/trainer/add", trainerUpload.single("image"), trainerController.add);
router.post("/trainer/update", trainerUpload.single("image"), trainerController.update)
router.post("/trainer/all", trainerController.all);
router.post("/trainer/single", trainerController.single)
router.post("/trainer/softDelete", trainerController.softDelete)

router.post("/trainer/profile/update", trainerController.update);


router.post("/batch/add", batchController.add);
router.post("/batch/update", batchController.update)
router.post("/batch/single", batchController.single)
router.post("/batch/softDelete", batchController.softDelete)

router.post("/membership/add", membershipController.add);
router.post("/membership/all", membershipController.all);
router.post("/membership/update", membershipController.update);
router.post("/membership/single", membershipController.single);
router.post("/membership/softDelete", membershipController.softDelete);

router.post("/trainer/progress/add", progressController.add);
router.post("/trainer/progress/all", progressController.all);
router.post("/trainer/progress/update", progressController.update);
router.post("/trainer/progress/single", progressController.single);
router.post("/trainer/progress/softDelete", progressController.softDelete);

router.post("/trainer/excercise/add", excerciseController.add);
router.post("/trainer/excercise/all", excerciseController.all);
router.post("/trainer/excercise/update", excerciseController.update);
router.post("/trainer/excercise/single", excerciseController.single);
router.post("/trainer/excercise/softDelete", excerciseController.softDelete);

router.post("/trainer/diet/add", dietController.add);
router.post("/trainer/diet/all", dietController.all);
router.post("/trainer/diet/update", dietController.update);
router.post("/trainer/diet/single", dietController.single);
router.post("/trainer/diet/softDelete", dietController.softDelete);


// Dashboard Routes
router.post("/batchRegistration/all", batchRegistrationController.getAll);
router.post("/batchRegistration/approve", batchRegistrationController.approveRequest);
router.post("/trainer/batchRegistration/all", batchRegistrationController.getByTrainer);
router.post("/dashboard", dashboardController.adminDashboard)
router.post("/trainer/dashboard", dashboardController.trainerDashboard)


router.post("/customers/all", customerController.all);
router.post("/customer/single", customerController.single);
router.post("/customer/softDelete", customerController.softDelete);

//contact routes
router.post("/contact/reply", contactController.update)
router.post("/contact/all", contactController.all)



// wildcard route
router.all(/(.*)/, (req, res) => {
  res.send({
    success: false,
    status: 404,
    message: "Invalid Address"
  })
})

module.exports = router
