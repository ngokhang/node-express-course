const { error } = require("../helpers");

const authorize = (req, res, next) => {
    const user = req.query.user;
    if (user === 'Jones') {
        console.log('Hello, Jones');
        next();
    } else {
        return error(res, null, 200, 'Unauthorized')
    }
}

module.exports = {
    authorize
}