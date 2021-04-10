const User = require('../mongodb/models/User')

const mongoUsers = async () => {
  const dataUsers = await User.find({}, function(err, users) {
    let userMap = {};
  
    users.forEach(function(user) {
      userMap[user._id] = user;
    });
  
    return userMap
  });
  
  return dataUsers
}

const providers = {
  users: mongoUsers()
};

const createNewUser = async (user) => {
  if(await User.findOne({email})){
    return 'email já cadastrado!!'
  }
  return await User.create(user)
}

const findUserByEmail = async (email) => {
  let user
  user = await User.findOne({email})
  return user
}

const resolvers = {
  user({ email }) {
    const response = findUserByEmail(email)
    console.log(response)
    return {user: response}
  },
  users() {
    return providers.users;
  },
  createUser({ nome, email, password }) {
    const user = {
      nome,
      email,
      password
    };

    const response = createNewUser(user);

    return {user: response};
  }
};

module.exports = resolvers