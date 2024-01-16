const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const SECRET_KEY = "seuSegredo";

const register = async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.json({ message: "Usuário registrado com sucesso" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const token = jwt.sign({ username: user.username, id: user._id }, SECRET_KEY);
  res.json({ token });
};

module.exports = { register, login };
