const { User } = require("../models");
const {
  generateToken,
  generateHashedPassword,
  verifyPassword,
} = require("../config");

// @description     Register new user
// @route           POST /api/user/
// @access          Public
const registerUser = async (req, res) => {
  const { name, email, password, pic,userType, gstNumber, cinNumber, panNumber, incubator_address, startup_domain, startup_owner, investor_amount } = req.body;

  // Check if any of them is undefined
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Please enter all the fields",
    });
  }

  // Check if user already exists in our DB
  const userExists = await User.findOne({ email }).exec();

  if (userExists) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "User already exists",
    });
  }

  // Register and store the new user
  const userCreated = await User.create(
    // If there is no picture present, remove 'pic'
    pic === undefined || pic.length === 0
      ? {
          name,
          email,
          password: await generateHashedPassword(password),
          userType, gstNumber, cinNumber, panNumber, incubator_address, startup_domain, startup_owner, investor_amount
        }
      : {
          name,
          email,
          password: await generateHashedPassword(password),
          pic,userType, gstNumber, cinNumber, panNumber, incubator_address, startup_domain, startup_owner, investor_amount
        }
  );

  if (userCreated) {
    return res.status(201).json({
      success: true,
      statusCode: 201,
      _id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      pic: userCreated.pic,
      userType:userCreated.userType,
      gstNumber:userCreated.gstNumber,
      cinNumber:userCreated.cinNumber,
      panNumber:userCreated.panNumber, 
      incubator_address:userCreated.incubator_address, 
      startup_domain:userCreated.startup_domain, 
      startup_owner:userCreated.startup_owner, 
      investor_amount:userCreated.investor_amount,
      token: generateToken(userCreated._id, userCreated.email),
      message: "User Created Successfully",
    });
  } else {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create the User",
    });
  }
};

// @description     Auth the user
// @route           POST /api/users/login
// @access          Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if any of them is undefined
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Please enter all the fields",
    });
  }

  // Check if user already exists in our DB
  const userExists = await User.findOne({ email }).exec();

  // If user exists and password is verified
  if (userExists && (await verifyPassword(password, userExists.password))) {
    return res.status(200).json({
      success: true,
      statusCode: 200,
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      pic: userExists.pic,
      userType:userExists.userType,
      gstNumber:userExists.gstNumber,
      cinNumber:userExists.cinNumber,
      panNumber:userExists.panNumber, 
      incubator_address:userExists.incubator_address, 
      startup_domain:userExists.startup_domain, 
      startup_owner:userExists.startup_owner, 
      investor_amount:userExists.investor_amount,
      token: generateToken(userExists._id, userExists.email),
      message: "Authenticated Successfully",
    });
  } else {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Invalid Email or Password",
    });
  }
};

// @description     Get or Search all users
// @route           GET /api/user?search=
// @access          Public
const allUsers = async (req, res) => {
  // Keyword contains search results
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  // Find and return users except current user
  const userExists = await User.find(keyword)
    .find({ _id: { $ne: req.user._id } })
    .exec();

  return res.status(200).json(userExists);
};

module.exports = { registerUser, authUser, allUsers };