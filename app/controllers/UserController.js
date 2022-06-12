const { User } = require('../models');
const userModel = User;

class UserController {
  handleRegister = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const roleId = 1; //buyer

      const user = await userModel.create({
        name,
        email,
        encryptedPassword: password,
        roleId,
      });

      res.status(201).json({
        user: user,
        message: 'User Created!',
      });
    } catch (err) {
      res.status(422).json(err);
    }
  };

  handleGetUser = async (req, res) => {
    try {
      const user = await userModel.findAll();

      res.status(200).json(user);
    } catch (err) {
      res.json(err);
    }
  };
}

module.exports = UserController;
