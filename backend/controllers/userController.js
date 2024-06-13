import User from "../models/userModel.js";


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const savedUserData = await User.findOne({ email });
    if (savedUserData) {
        res.status(403);
        throw new Error("email already exists, try to login or use different email to register");
    } else {
        const data = await User.create({ email, name, password });
        if (data) {
            res.status(201).json({
                _id: data._id,
                name: data.name,
                email: data.email
            })
        } else {
            res.status(401);
            throw new Error("invalid use data");
        }
    }
}

const authenticateUser = async (req, res) => {
    const { email, password } = req.body;
    const data = await User.findOne({ email });
    if (data.password === password) {
        res.status(200).json({
            _id: data._id,
            name: data.name,
            email: data.email
        })
    } else {
        res.status(400);
        throw new Error("invalid Credentials")
    }

}

export { registerUser, authenticateUser };