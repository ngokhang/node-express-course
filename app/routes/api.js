const express = require('express');
const router = express.Router();
const { products } = require('../data.js');
const { response, error } = require('../helpers/index.js');
const { deleteCourse, putCourse } = require('../controllers/Courses.controller.js');

router.get('/courses', (req, res) => {
    // return res.send(JSON.stringify(products));
    return response(res, products, 200, 'Get all courses successful')
});

// router.get('/courses/:idc', (req, res) => {
//     let product = products.find((product) => product.id === Number.parseInt(req.params.idc));
//     if (!product) {
//         return res.status(404).json({
//             EC: 404,
//             courseInfo: `Not found course have ID: ${req.params.idc}`,
//         });
//     }
//     return res.status(200).json({
//         EC: 0,
//         courseInfo: product,
//     });
// });

router.get('/courses/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedCourses = [...products];
    if (limit) {
        sortedCourses = sortedCourses.slice(0, limit + 1);
    }
    if (search) {
        sortedCourses = sortedCourses.filter(course => {
            return course.name.includes(search);
        });
    }
    if (sortedCourses.length < 1) {
        return error(res, null, 200, 'No courses match with your keyword');
    }
    return response(res, sortedCourses, 200, 'Get courses successful');
});

router.post('/courses', (req, res) => {
    let { id, name, image, price, desc } = req.body;
    let newCourse = { id, name, image, price, desc };
    products.push(newCourse);

    return response(res, products, 200, 'Create new course successful');
});

router.put('/courses/:id', putCourse);
router.delete('/courses/:id', deleteCourse);

module.exports = router;