import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true
    },
    password: String
  },
  {
    timestamps: true
  }
)

const UserModel = mongoose.model('User', userSchema, 'users')

export default UserModel
