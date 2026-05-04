const userModel = require("../apis/user/userModel")
const bcrypt = require('bcrypt')
const saltRounds = 10;


userModel.findOne({ email: "admin@gmail.com" }).then((a) => {
    if (a) {
        console.log("Admin already exist")
    }
    else {
        let admin = new userModel()
        admin.autoId = 1
        admin.email = "admin@gmail.com"
        admin.name = "admin"
        admin.password = bcrypt.hashSync("123", saltRounds)
        admin.userType = 1
        admin.phone = 7865234790
        admin.save().then((savedAdmin) => {
            console.log("Admin created");

        })

    }
}).catch((err) => {
    console.log("error in saving admin", err);
})
