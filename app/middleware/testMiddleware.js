const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    if (time === 2023) {
        console.log(time);
    }
    next();
};

module.exports = {
    logger
}