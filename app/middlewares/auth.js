const admin = require("../config/firebase-config");
require("dotenv").config();

// Verify JWT
async function signUpAuthorization(req, res, next) {
    const token = req.header("Authorization");
    try {
        await admin.auth().verifyIdToken(token);
    } catch (error) {
        console.log(error);
        res.status(401).send({ message: "Please log in first" });
        return;
    }
    next();
}

async function userAuthorization(req, res, next) {
    try {
        const token = req.header("Authorization");
        console.log(req.toString());
        req.email = await getUserEmail(token);
    } catch (error) {
        console.log(error);
        res.status(401).send({ message: "Please log in first" });
        return;
    }
    next();
}

const getUserEmail = async (token) => {
    const decodedToken = await admin.auth().verifyIdToken(token);
    // console.log(decodedToken)
    const firebaseUser = await admin.auth().getUserByEmail(decodedToken.email);
    return firebaseUser.email;
};

module.exports = {
    signUpAuthorization,
    userAuthorization,
};
