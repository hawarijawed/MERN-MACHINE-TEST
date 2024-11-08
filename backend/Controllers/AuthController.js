const User = require('../Models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) =>{
    const {username, password} = req.body;
    const user = await User.findone({username});
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({message: 'Invalid credential'});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
    res.json({token, username:use.username});
};