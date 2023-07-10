const User = require("../models/userSchema");
const putData = async (req, res) => {
  try {
    let data = User.findById(req.params.id);
    data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};
module.exports = putData;
