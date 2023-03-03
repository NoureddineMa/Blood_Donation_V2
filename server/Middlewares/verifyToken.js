const jwt = require('jsonwebtoken');

const verifyToken = function(req, res, next) {
    try {
        const auth = req.headers
        console.log(auth);
        const token = auth && auth.split(" ")
       
        if (!token) {
            return res.status(401).json({ message: 'Access Denied! No token' });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token!' });
    }
};


module.exports = verifyToken;