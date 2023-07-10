const User = require("../models/userSchema");
const deleteData = async (req, res) => {
  try {
    const data = await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
module.exports = deleteData;
