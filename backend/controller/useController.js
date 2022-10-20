const userData = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const fetchUser = require('../middleware/fetchUser');
                  
const JWT_SECRET = 'Hitisgoodboy'

exports.userRegistration = async (req, res) => {
    
    const salt = await bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    
    try {
        const userDetails = new userData({
            name: req.body.name, 
            password: secPass,
            email: req.body.email,
        });
        
        // console.log("userDetails:::", userDetails);
        const saveUserData = await userDetails.save();
        
        const date = {
            saveUserData:{
                id:saveUserData.id
            }
        }
        
        const jwtData = jwt.sign(date, JWT_SECRET);
        // console.log(jwtData);
        
        res.status(201).json(
            {    
                message: "User Registered",
                status: 201,
                data: jwtData
            }
            )
        } catch (error) {
            console.log("userDetails--error:::", error);
        res.status(400).json(
            {
                message: "Doctor Not Registered",
                status: 400
            }
        )
    }
};