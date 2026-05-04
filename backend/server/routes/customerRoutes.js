const router = require("express").Router()
const multer = require("multer")
const customerController = require("../apis/customer/customerController")
const storage = multer.memoryStorage();
const fileUpload = multer({ storage });
const aiController = require('../apis/ai/aiController')
const contactController = require('../apis/contact/contactControlller')
const userController = require('../apis/user/userController')
const batchRegistrationController = require('../apis/batchRegistration/batchRegistrationController')


router.post("/genAi", aiController.main)

// Customers Routes
// const customerStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'server/public/customer')
//     },
//     filename: function (req, file, cb) {
//         console.log("Multer", file);
//         const unique = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + unique + file.originalname)
//     }
// })
// const profileUpload = multer({ storage: customerStorage })
router.post("/register", fileUpload.single('image'), customerController.register)
router.post("/update", fileUpload.single('image'), customerController.update)
router.post("/customers/all", customerController.all);
router.post("/customer/single", customerController.single);
router.post("/batchRegistration/add", batchRegistrationController.addRequest);
router.post("/customer/batchRegistration/all", batchRegistrationController.getByCustomer);
router.post("/contact/add", contactController.add)

router.use(require("../../server/middlewear/tokenChecker"))
router.post("/changePassword", userController.changePassword)

// router.post("/register", profileUpload.single('profile'), customerController.register)

// wildcard route
router.all(/(.*)/, (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router