const User = require("../models/userSchema")
const postData = async (req,res) => {
    try {
        const data = await User.create(req.body)
        res.status(201).json({data})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = postData;