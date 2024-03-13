// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        arrayNav: [
            { label: 'Courses', new: false },
            { label: 'Course Formats', new: false },
            { label: 'Add Course', new: true },
            { label: 'Pages', new: false },
            { label: 'Demos', new: false }
        ],

        arraySocials: ['<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-x-twitter"></i>'],

        courses: [
            {
                special: true,
                cover: "../public/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg",
                title: "How to be a DJ? Make Electronic Music",
                type: "Electronic",
                difficulty: "Advanced",
                lectures: 8,
                hours: 6,
                price: "$59",
            },
            {
                special: true,
                cover: "../public/images/12345-1-370x200.png",
                title: "Nvidia and UE4 Technologies Practice",
                type: "Nvidia",
                difficulty: "Advanced",
                lectures: 8,
                hours: 6,
                price: "$59",
            },
            {
                special: true,
                cover: "../public/images/photo-1491897554428-130a60dd4757-370x200.jpeg",
                title: "Fashion Photography from professional",
                type: "Fashion",
                difficulty: "Advanced",
                lectures: 6,
                hours: 6,
                price: "$54",
            },
            {
                special: false,
                cover: "../public/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg",
                title: "Design Instruments for Communication",
                type: "Communication",
                difficulty: "Intermediate",
                lectures: 6,
                hours: 6,
                price: "$54",
            },
            {
                special: false,
                cover: "../public/images/cathryn-lavery-67852-unsplash-370x200.jpg",
                title: "Make your Concept Right and Beautiful",
                type: "Art",
                difficulty: "Intermediate",
                lectures: 6,
                hours: 6,
                price: "$54",
            },
            {
                special: false,
                cover: "../public/images/photo-1475452779376-caebfb988090-370x200.jpeg",
                title: "Road Bike Manual or How to Be a Champion",
                type: "Bicycling",
                difficulty: "Beginner",
                lectures: 6,
                hours: 6,
                price: "$35",
            },
        ],

        whyUs: [
            {
                title: "Entrepreneurship",
                logo: '<i class="fa-solid fa-briefcase"></i>',
                description: "Unlock your potential for business success. Learn to innovate, lead, and navigate the complexities of entrepreneurship for sustainable growth and impact."
            },
            {
                title: "Accelerated learning",
                logo: '<i class="fa-solid fa-rocket"></i>',
                description: "Master efficient learning techniques. Accelerate your understanding and retention of information for rapid skill acquisition, academic excellence, and professional advancement."
            },
            {
                title: "Productivity",
                logo: '<i class="fa-solid fa-thumbs-up"></i>',
                description: "Maximize your efficiency and output. Develop strategies to manage time, prioritize tasks, and optimize workflows for peak productivity and personal satisfaction."
            },
            {
                title: "Life Coaching",
                logo: '<i class="fa-solid fa-gear"></i>',
                description: "Empower personal growth and fulfillment. Gain insights, clarity, and support to overcome obstacles, embrace change, and thrive in all aspects of life."
            },
        ],

        counters: [
            {
                count: 3195,
                title: "Online Learner",
                logo: '<i class="fa-regular fa-user"></i>'
            },
            {
                count: 23,
                title: "Video Courses",
                logo: '<i class="fa-solid fa-film"></i>'
            },
            {
                count: 437,
                title: "Sliders & Images",
                logo: '<i class="fa-regular fa-image"></i>'
            },
            {
                count: 1440,
                title: "Excellent Reviews",
                logo: '<i class="fa-regular fa-thumbs-up"></i>'
            },
        ],

        pages: [
            {
                avatar: "/images/1-100x100.jpg",
                title: 'Excellent Course!',
                vote: 5,
                content: 'I enrolled in the Web Development course, and it exceeded all my expectations. The instructors are knowledgeable and engaging, and the content is well-structured. I learned a lot and highly recommend it to anyone interested in learning web development.'
            },
            {
                avatar: "/images/2-100x100.jpg",
                title: 'Highly Informative!',
                vote: 5,
                content: 'I took the Data Science course, and it was incredibly informative. The lessons were well-paced and covered a wide range of topics. The hands-on projects were particularly helpful in reinforcing concepts. I feel much more confident in my data analysis skills now. Thanks!'
            },
            {
                avatar: "/images/4-100x100.jpg",
                title: 'Fantastic Learning Experience!',
                vote: 4,
                content: 'I recently completed the Graphic Design course, and it was a fantastic learning experience. The course material was comprehensive, and the practical assignments helped me improve my design skills significantly. I\'m grateful for the opportunity to learn from such talented instructors.'
            }
        ],

        // footer //

        footer: [
            {
                title: "about",
                item: "Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.\nDeveloped by StylemixThemes.",
                socials: ['<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-instagram"></i>'],
            },
            {
                title: "contacts",
                items: ["USA, California 20, First Avenue, California", "Tel.: +1 212 458 300 32", "Fax: +1 212 375 24 14", "info@masterstudy.com"],
            },
            {
                title: "pages",
                items: ["Blog", "Home", "Shortcodes", "Courses", "Membership", "Typography"],
            },
            {
                title: "blog",
                items: [
                    {
                        title: 'Our main target is to "Developing Yourself as a Leader"',
                        pic: '/images/photo-1517520287167-4bbf64a00d66-75x75.jpeg',
                        date: 'August 9, 2018'
                    },
                    {
                        title: 'Those Other College Expenses You Aren\'t Thinking About',
                        pic: '/images/photo-1490376840453-5f616fbebe5b-75x75.jpeg',
                        date: 'June 3, 2015'
                    },
                ],
            },
        ]
    },
});

export default store;