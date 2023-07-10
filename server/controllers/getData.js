const User = require("../models/userSchema");
const getData = async (req, res) => {
  try {
    const data = await User.find();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;
