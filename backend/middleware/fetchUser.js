const jwt = require('jsonwebtoken');
const { route } = require('../routes/user.routes');
const JWT_SECRET = 'Hitisgoodboy'

const fetchUser = (req, res, next) =>{
    const token = req.headers('auth-token');
    if(!token){
        res.send(401).send({error: "Please authenticate using a valid token"})
    }
    try {
        const string = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.send(401);
    } 
}

// route.post('/getuser', fetchUser, async(req, res) => {
//     try{
//         userID = req.user.id;
//         const user = await User.findById(userId).select("-password")
//         res.send(user)
//     } catch(error) {
//         console.error(error.message);
//         res.status(500).send("Enternal server error");
//     }
// })
 
module.exports = fetchUser;   