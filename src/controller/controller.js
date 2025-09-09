// temporary storage
let users = [];

// POST - add user
export const postdata = (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: 'User added successfully!', users });
};

// GET - fetch users
export const getdata = (req, res) => {
  res.json({ users });
};

// PUT - update user by name
export const putdata = (req, res) => {
  const { name } = req.params;
  const { age } = req.body;

  const user = users.find(u => u.name === name);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.age = age;
  res.json({ message: 'User updated!', user });
};

// DELETE - remove user by name
export const deletedata = (req, res) => {
  const { name } = req.params;

  const index = users.findIndex(u => u.name === name);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users.splice(index, 1); // remove from array
  res.json({ message: 'User deleted!', deletedUser });
};
