const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async(req,res) => {
    try {
        res.status(200).send("Welcome to Home Page using Controllers!");
    } catch (error) {
        console.log(error);
    }
}

const register = async(req, res) => {

    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body
        const userExist = await User.findOne({email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists!" });
        }

        


        const userCreated = await User.create({username, email, phone, password});

        if (userCreated)
        {
        res.status(200).json({ msg: "User Created", token: await userCreated.generateToken() , userId: userCreated._id.toString(), });
        }
    } catch (error) {
        res.status(400).send({
            msg: "Page Not Found"
        })
    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({message: "Invalid Credentials!"});
        }
        
        const user= await userExist.comparePassword(password);

        if (user){
            res.status(200).json({ msg: "Login Successful",
                                   token: await userExist.generateToken(),
                                   userId: userExist._id.toString(),
                                 });
        }
        else{
            res.status(401).json({message: "Invalid email or Password"});
        }
        
    } catch (error) {
        // res.status(500).json("Internal Server Error");
        next(error);
    }
}



module.exports = {home,register,login}