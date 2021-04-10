const mongoose = require('../database/index')
const bcrypt = require('bcryptjs')

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, { collection: 'users' })

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const User = model('User', UserSchema)

module.exports = User
