let { products } = require("../data");

const updateCourseService = (idCourse, dataNewCourse) => {
    products[idCourse] = dataNewCourse;
    return products[idCourse];
};

const deleteCourseServices = (idCourse) => {
    products = products.splice(idCourse, 1);
    return products;
}

module.exports = {
    updateCourseService,
    deleteCourseServices
}