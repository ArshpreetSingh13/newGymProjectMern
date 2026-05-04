const jwt = require("jsonwebtoken")
const secretKey = process.env.secretKey

module.exports = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.send({
                    success: false,
                    status: 403,
                    message: err
                })
            }
            else {
                req.decoded = decoded,
                    req.decoded.addedById = req.decoded._id,
                    req.decoded.updatedById = req.decoded._id
                next()
            }
        })
    } else {
        res.send({
            success: false,
            status: 404,
            message: "token not found"
        })
    }
}