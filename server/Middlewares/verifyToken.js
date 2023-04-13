const jwt = require('jsonwebtoken')

const verifyToken = function (req, res, next) {

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) return res.status(401).json({ message: "Acces Denied !" })
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified
        next()
    } catch (error) {
        res.status(400)
            .json({ message: "Invalid Token" })
    }
}

module.exports = verifyToken;