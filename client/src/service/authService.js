import User from "../../../server/models/user.js"
import * as request from '../helper/request.js'
export const login = async (username, password) => {
    const user = await User.findOne({ username })
    if (!user) {
        throw new Error("Invalid username or password!")
    }
    await validatePassword(password, user.password)
    const token = 'yes'
    return token
}


async function validatePassword(password, userPassword) {
    const isValid = await bcrypt.compare(password, userPassword)
    if (!isValid) {
        throw new Error("Invalid email or password!")

    }
}