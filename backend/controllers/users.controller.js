export const getUser = (req, res) => {
  req.params.id = id;
  res.send(`User of id: ${id}`);
};
export const createUser = async (req, res) => {
  res.send("Signup page");
};
export const loginUser = async (req, res) => {
  res.send("Login page");
};
