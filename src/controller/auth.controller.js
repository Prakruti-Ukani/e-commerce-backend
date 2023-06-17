import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../model/user.model"

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    let encryptedPassword = bcrypt.hashSync(password, 9)
    const userData = await User.create({ email, firstName, lastName, password: encryptedPassword })
    const token = jwt.sign({ _id: userData._id }, process.env.AUTH_KEY)
    res.json({ user: userData, token})
}

const login = async (req, res) => {
    const { email, password } = req.body
    const userData = await User.findOne({ email })
    if (!userData) {
        res.status(400).json({ message: 'member is not exist' })
    }
    const isValid = bcrypt.compareSync(password, userData?.password)
    const token = jwt.sign({ _id: userData._id }, process.env.AUTH_KEY)
    if (!isValid) {
        res.status(400).json({ message: 'incorrect password' })
    } else {
        res.json({ user: userData, token})
    }
}

export {
    createUser,
    login
}