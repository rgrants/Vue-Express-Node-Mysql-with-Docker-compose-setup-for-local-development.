let jwt = require('jsonwebtoken');
const config = require('./config.js');
const session = require('express-session');

let checkToken = (request, response, next) => {
    let token = request.headers['authorization']; // Express headers are auto converted to lowercase

    if (!token) {
        response.send('{"status":"No token"}');

    } else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return response.json({
                    status: 9,
                    message: 'Token is not valid'
                });
            } else {
                console.log("SESSION ID: in ELSE :  "+request.sessionID);
                if(request.sessionID === decoded.sessionID) {

                    request.decoded = decoded;
                    console.log("decoded : ", decoded.sessionID, " :: ", request.sessionID);
                    next();
                }else {
                    console.log("decoded : ", decoded.sessionID, " :: ", request.sessionID);

                    return response.json({
                        status: 9,
                        message: 'Token is not same'
                    });
                }

            }
        });
    }

};

module.exports = {
    checkToken: checkToken
};