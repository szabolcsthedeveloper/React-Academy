import { writable } from "svelte/store";
import { browser } from '$app/environment';

// Going to serve the small images with the project and the big ones over the internet

export const defaultObj = {
    darkTheme: true,
    name: '',
    version: '1.0.1',
    roadmap: {
        'HTML | CSS | GIT': {
            description: 'HTML, CSS & GIT are at the foundation of most web development projects - so it\'s the perfect place to start.',
            milestones: {
                'FreeCodeCamp - Responsive Web Design': {
                    url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
                    imgUrl: 'https://i.imgur.com/X1tCiiM.png',
                    imgUrlSm: 'fcc_-_rwd.jpg',
                    iconUrl: 'https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg',
                    iconUrlSm: 'fcc_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'Start your journey where I started mine! FreeCodeCamp.org have the ultimate interactive certificate to take your HTML & CSS skills from zero to hero.'
                },
                'GIT Crash Course': {
                    url: 'https://www.youtube.com/watch?v=WqWZt5gi-jw&t=6s',
                    imgUrl: 'https://i.imgur.com/ieJEuKi.jpg',
                    imgUrlSm: 'git_crash_course.jpg',
                    iconUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png',
                    iconUrlSm: 'git_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'GIT is the version control technology used by the vast majority of developers; a truly essential skill.'
                },
                'The Odin Project': {
                    url: 'https://www.theodinproject.com/paths/foundations/courses/foundations',
                    imgUrl: 'https://www.theodinproject.com/assets/og-logo-022832d4cefeec1d5266237be260192f5980f9bcbf1c9ca151b358f0ce1fd2df.png',
                    imgUrlSm: 'top.jpg',
                    iconUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1659733391162/mcIUBIb6F.jpg?auto=compress,format&format=webp',
                    iconUrlSm: 'top_logo_2.jpg',
                    complete: false,
                    primary: false,
                    description: 'The Odin Project (TOP) is an additional resource for learning the basics of web development. If FreeCodeCamp.org isn\'t right for you, then TOP might be!'
                },
                'The Internet is Hard': {
                    url: 'https://internetingishard.netlify.app/html-and-css/basic-web-pages/index.html',
                    imgUrl: 'https://i.imgur.com/Rqqdjlf.png',
                    imgUrlSm: 'the_internet_is_hard.jpg',
                    iconUrl: 'https://i.imgur.com/L2DuYDC.jpg',
                    iconUrlSm: 'the_internet_is_hard_logo.jpg',
                    complete: false,
                    primary: false,
                    description: 'Another alternative resource for those looking to truly consolidate their foundational knowledge.'
                }
            }
        },
        "JavaScript": {
            description: 'JavaScript is the most popular programming language used world wide!',
            milestones: {
                'FreeCodeCamp - JavaScript Algorithms and Data Structures': {
                    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
                    imgUrl: 'https://i.imgur.com/jQgRQIC.png',
                    imgUrlSm: 'fcc_javascript.jpg',
                    iconUrl: 'https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg',
                    iconUrlSm: 'fcc_logo.jpg',
                    complete: false,
                    primary: true,
                    description: "This is where I started my programming journey and I can think of no better place for anyone else to do the same!"
                },
                'JavaScript HTML & CSS Project': {
                    url: 'https://www.youtube.com/watch?v=bnTdSbCDsmA',
                    imgUrl: 'https://i.imgur.com/50TLL7X.jpg',
                    imgUrlSm: 'javascript_project_1.jpg',
                    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
                    iconUrlSm: 'javascript_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'In this beginner project tutorial, we put them to use by building a neat CRUD (create, read, update, delete) app that exercises principles such as responsive web design, fonts, icon sets, dynamic content & more! And at the end of the video we host the project live using Netlify.'
                },
                'JavaScript Crash Course': {
                    url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
                    imgUrl: 'https://i.imgur.com/9iB0wT9.jpg',
                    imgUrlSm: 'free_javascript_crash_course.jpg',
                    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
                    iconUrlSm: 'javascript_logo.jpg',
                    complete: false,
                    primary: false,
                    description: 'This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.'
                },

            }
        },
        'Frontend JavaScript Frameworks': {
            description: 'JavaScript frameworks make building dynamic and interactive websites incredibly easy. There\'s loads to pick from but React.js is a great place to start!',
            milestones: {
                'React Crash Course': {
                    url: 'https://youtu.be/hRlujM-sycg',
                    imgUrl: 'https://i.imgur.com/YUZoSNY.jpg',
                    imgUrlSm: 'learn_react.jpg',
                    iconUrl: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
                    iconUrlSm: 'react_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'Learn React.js by putting together a Lord Of The Rings information site that fetches data from an API and has some funky dynamic componentry to render it out.'
                },
                'React Beginner Project': {
                    url: 'https://youtu.be/lp4lWkPCZDg',
                    imgUrl: 'https://i.imgur.com/kpdA8Ea.jpg',
                    imgUrlSm: 'react_project.jpg',
                    iconUrl: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
                    iconUrlSm: 'react_logo.jpg',
                    complete: false,
                    primary: false,
                    description: 'In this video, we build a transcription and translation web application that runs 2 machine learning models in the users browser for free with React.js, Huggingface.js & TailwindCSS.'
                },
                'NEXT.JS Crash Course': {
                    url: 'https://youtu.be/oLPgc5Fp2Ts',
                    imgUrl: 'https://i.imgur.com/4cHVNRT.jpg',
                    imgUrlSm: 'nextjs_project.jpg',
                    iconUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png',
                    iconUrlSm: 'nextjs_logo.png',
                    complete: false,
                    primary: true,
                    description: 'In this Next.js E-commerce Store tutorial, we cover using technology like Zustand for global state management in our App, the Stripe API for all our product and transaction handling, and TailwindCSS to design and stylize our web app.'
                },
                'SvelteKit Crash Course': {
                    url: 'https://youtu.be/TIbL0VOE900',
                    imgUrl: 'https://i.imgur.com/ZTabOHs.jpg',
                    imgUrlSm: 'sveltekit crash course.jpg',
                    iconUrl: 'https://a.storyblok.com/f/88751/1702x2049/619c584101/svelte_logo.png',
                    iconUrlSm: 'sveltekit_logo.jpg',
                    complete: false,
                    primary: false,
                    description: 'In this video, we cover all the best practices for svelte stores, state management, authentication, routes, styling, responsive web app development and learn how we can implement all the CRUD operations using Firestore and Firebase Auth.'
                },
                'Qwik Crash Course': {
                    url: 'https://youtu.be/4a75F4FEArs',
                    imgUrl: 'https://i.imgur.com/Uy6ZehU.jpg',
                    imgUrlSm: 'qwik.jpg',
                    iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPTH86DL8E2kxm09LcFERIItqIzf7TIWXrN3mr-4&s',
                    iconUrlSm: 'qwik_logo.jpg',
                    complete: false,
                    primary: false,
                    description: 'In this video we look at how we can build modern CRUD apps with TailwindCSS & Qwik.'
                },
                'Full Stack Open - React': {
                    url: 'https://fullstackopen.com/en/about',
                    imgUrl: 'https://i.imgur.com/kDm2nw4.png',
                    imgUrlSm: 'fso.jpg',
                    iconUrl: 'https://i.imgur.com/kDm2nw4.png',
                    iconUrlSm: 'fso.jpg',
                    complete: false,
                    primary: false,
                    description: 'Consolidate your React skills by completing this comprehesive curriculum.'
                },
            }
        },
        "Backend Server Frameworks": {
            description: 'If you\'re looking to extend your capabilites beyound Frontend development into Full Stack development, then it\'s time to explore some Backend tech!',
            milestones: {
                'Node.js & Express.js Crash Course': {
                    url: 'https://youtu.be/V8ePZHOjRQo',
                    imgUrl: 'https://i.imgur.com/67MYdDZ.jpg',
                    imgUrlSm: 'node_crash_course.jpg',
                    iconUrl: 'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
                    iconUrlSm: 'node_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'In this video, we look at all the fundamentals needed to start developing your own Node.js applications today!'
                },
                'Dockerized Node.js & PostgreSQL Tutorial': {
                    url: 'https://youtu.be/sDPw2Yp4JwE',
                    imgUrl: 'https://i.imgur.com/DaDO7s6.jpg',
                    imgUrlSm: 'docker_app.jpg',
                    iconUrl: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
                    iconUrlSm: 'docker_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'In this video, we look at how we can build a CRUD backend server with Nodejs Express and a PostgreSQL database, and then we dockerize our entire application in Docker containers, and run everything using a compose.yaml file. '
                },
                'Full Stack Open - Node': {
                    url: 'https://fullstackopen.com/en/about',
                    imgUrl: 'https://i.imgur.com/kDm2nw4.png',
                    imgUrlSm: 'fso.jpg',
                    iconUrl: 'https://i.imgur.com/kDm2nw4.png',
                    iconUrlSm: 'fso.jpg',
                    complete: false,
                    primary: false,
                    description: 'Dive deeper into backend development with Node.js and incorporating it with frontend and database systems.'
                },
            }
        },
        "Databases Pt.1 - NoSQL": {
            description: 'It\'s time to persist data - all the data... all of it!',
            milestones: {
                'FreeCodeCamp - MongoDB & Mongoose': {
                    url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/mongodb-and-mongoose/install-and-set-up-mongoose',
                    imgUrl: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
                    imgUrlSm: 'mongo_db.jpg',
                    iconUrl: 'https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg',
                    iconUrlSm: 'fcc_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'One of the most common NoSQL databases in production environment.'
                },
                'Firebase Firestore': {
                    url: 'https://youtu.be/LefcqnZHYeg',
                    imgUrl: 'https://i.imgur.com/9NkfMoP.jpg',
                    imgUrlSm: 'firebase.jpg',
                    iconUrl: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
                    iconUrlSm: 'firebase_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'We look at how we can persist dynamic information from a user in a React application, and how we can Create, Read, Update & Delete (CRUD) in Google\'s Firestore NoSQL database.'
                },
            }
        },
        "Databases Pt.2 - SQL": {
            description: 'Learning how to maintain a relational database is essential for managing big data applications & much more!',
            milestones: {
                'FreeCodeCamp - Relational Databases': {
                    url: 'https://www.freecodecamp.org/learn/relational-database/',
                    imgUrl: 'https://i.imgur.com/0AmFayz.png',
                    imgUrlSm: 'fcc_sql.jpg',
                    iconUrl: 'https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg',
                    iconUrlSm: 'fcc_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'From writing bash scripts to coding and populating databases with celestial bodies - there\'s plently to learn.'
                },
                'SQL Crash Course': {
                    url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
                    imgUrl: 'https://i.imgur.com/aNr9cBn.jpg',
                    imgUrlSm: 'sql.jpg',
                    iconUrl: 'https://user-images.githubusercontent.com/24623425/36042969-f87531d4-0d8a-11e8-9dee-e87ab8c6a9e3.png',
                    iconUrlSm: 'sql_logo.jpg',
                    complete: false,
                    primary: true,
                    description: 'Learn all the basic SQL commands for managing big data fast and efficiently.'
                },
            }
        },
    }
}

const initialValue = browser ? JSON.parse(window.localStorage.getItem('smoljamesRoadmap')) ?? defaultObj : defaultObj;
const store = writable(initialValue)

store.subscribe((val) => {
    if (browser) {
        window.localStorage.setItem('smoljamesRoadmap', JSON.stringify(val))
    }
})

export default store