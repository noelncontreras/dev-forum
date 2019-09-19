const bcrypt = require("bcryptjs");

module.exports = {
    getUser: (req, res) => {
        if(req.session.user) {
            res.status(200).json(req.session.user);
        } else {
            res.sendStatus(401);
        }

    },
    registerUser: async (req, res) => {
        const {username, password, firstName} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.check_ForUsername(username);

        if(foundUser[0]) {
            res.status(409).json("Username Taken")
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = await db.auth.registerUser(firstName, username, hash);

            req.session.user = {
                user_id: newUser[0].user_id,
                username: newUser[0].username,
                firstName: newUser[0].first_name
            }

            res.status(200).json(req.session.user);
        }
        
    },
    loginUser: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.check_ForUsername(username);
        if(!foundUser[0]) {
            res.status(403).json("Username/Password Incorrect")
        } else {
            const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash)
            if(!isAuthenticated){
                res.status(403).json("Username/Password Incorrect")
            }  else {
                req.session.user = {
                    user_id: foundUser[0].user_id,
                    username: foundUser[0].username,
                    firstName: foundUser[0].first_name
                }
                res.status(200).json(req.session.user);
            }
        }

    },
    logoutUser: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);

    }
};