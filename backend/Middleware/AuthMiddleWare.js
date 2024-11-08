const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Unauthorized Access'});

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message:'Invalid token'});
    }
};