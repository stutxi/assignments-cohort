const { Router } = require("express");
// const zod = require("zod");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db');
const router = Router();

// const adminSignSchema = zod.object({
//     username: zod.string(),
//     password: zod.string().min(6)
// });

// const courseCreationSchema = zod.object({
//     title: zod.string(),
//     description: zod.string(),
//     imageLink: zod.string().url(),
//     price: zod.number().positive()
// });

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    res.json({
        message: "Course created successfully",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        course: response
    })
});

module.exports = router;