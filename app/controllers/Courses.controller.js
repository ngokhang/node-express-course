const { products } = require("../data");
const { response, error } = require("../helpers");
const { updateCourseService, deleteCourseServices } = require("../services/CoursesServices");

const putCourse = (req, res) => {
    let idCourse = --req.params.id;
    let newCourseData = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        desc: req.body.desc
    }
    const result = updateCourseService(idCourse, newCourseData);

    if (!result) {
        return error(res, null, 200, 'Not found');
    }
    return response(res, products, 200, 'Edited');
};

const deleteCourse = (req, res) => {
    let idCourse = --req.params.id;
    const result = deleteCourseServices(idCourse);

    if (!result) {
        return error(res, null, 200, 'Not found');
    }
    return response(res, products, 200, 'Deleted');
}

module.exports = {
    putCourse, deleteCourse
}