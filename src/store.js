// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        arrayNav: ['Courses', 'Course Formats', 'Add Course', 'Pages', 'Demos'],
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
            },
            {
                special: true,
                cover: "../public/images/12345-1-370x200.png",
                title: "Nvidia and UE4 Technologies Practice",
                type: "Nvidia",
                difficulty: "Advanced",
                lectures: 8,
                hours: 6,
            },
            {
                special: true,
                cover: "../public/images/photo-1491897554428-130a60dd4757-370x200.jpeg",
                title: "Fashion Photography from professional",
                type: "Fashion",
                difficulty: "Advanced",
                lectures: 6,
                hours: 6,
            },
            {
                special: false,
                cover: "../public/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg",
                title: "Design Instruments for Communication",
                type: "Communication",
                difficulty: "Intermediate",
                lectures: 6,
                hours: 6,
            },
            {
                special: false,
                cover: "../public/images/cathryn-lavery-67852-unsplash-370x200.jpg",
                title: "Make your Concept Right and Beautiful",
                type: "Art",
                difficulty: "Intermediate",
                lectures: 6,
                hours: 6,
            },
            {
                special: false,
                cover: "../public/images/photo-1475452779376-caebfb988090-370x200.jpeg",
                title: "Road Bike Manual or How to Be a Champion",
                type: "Bicycling",
                difficulty: "Beginner",
                lectures: 6,
                hours: 6,
            },
        ],
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
});

export default store;