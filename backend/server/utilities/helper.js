// const multer = require('multer')
// const fs = require("fs");
// const path = require("node:path");
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         let fieldname = (file.fieldname.split("_"))[0];
//         let uploadPath = path.join(process.cwd(), "public", fieldname)
//         if (fs.existsSync(uploadPath)) {
//         } else {
//             fs.mkdirSync(uploadPath, { recursive: true })
//         }
//         cb(null, uploadPath);
//     },
//     filename: function (req, file, cb) {
//         let originalName = file.originalname;
//         let extension = originalName.split('.'); 

//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, uniqueSuffix + "." + extension[1]);
//     }
// })

// module.exports = {
//     storage
// }

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});



const uploadImg = async (fileBuffer, publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                public_id: publicId,
                resource_type: "auto"
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        ).end(fileBuffer);
    });
};

module.exports = {
    uploadImg
};