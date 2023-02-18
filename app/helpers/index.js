const response = (res, data, status, message) => {
    return res.status(status || 200).json({
        success: true,
        message: message || "Request successful",
        data
    })
};

const error = (res, error, status, message) => {
    return res.status(200).json({
        success: false,
        message: message || 'Request failed',
        error: error?.message
    })
};


module.exports = {
    response,
    error
}