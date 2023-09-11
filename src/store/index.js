import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Going to serve the small images with the project and the big ones over the internet

export const defaultObj = {
  darkTheme: true,
  name: "",
  version: "1.0.1",
  roadmap: {
    FOUNDATION: {
      description:
        "HTML, CSS, and Git serve as the foundational building blocks for the majority of web development initiatives, making them an ideal starting point.",

      milestones: {
        "Understanding Technology - Harvard's CS50t": {
          url: "https://cs50.harvard.edu/technology/2017/",
          imgUrl: "https://i.imgur.com/IxSWCel.png",
          imgUrlSm: "cs50t.png",
          iconUrl:
            "https://1000logos.net/wp-content/uploads/2017/02/Colors-Harvard-Logo.jpg",
          iconUrlSm: "harvard-logo.jpg",
          complete: false,
          primary: true,
          description:
            "Harvard's CS50 offers top-notch, free programming insights. Dive in and grasp the basics of today's tech — valuable knowledge for future interviews. Bonus: finish the course and snag a free certificate!",
        },

        "Introduction into Computer Science - Harvard's CS50x": {
          url: "https://cs50.harvard.edu/x/2023/",
          imgUrl: "https://i.imgur.com/bkI1dGN.png",
          imgUrlSm: "cs50x.png",
          iconUrl:
            "https://1000logos.net/wp-content/uploads/2017/02/Colors-Harvard-Logo.jpg",
          iconUrlSm: "harvard-logo.jpg",
          complete: false,
          primary: false,
          description:
            "Dive into Harvard's renowned introduction to Computer Science. If you're laser-focused on front-end mastery, this might not be your quickest path. However, don't bypass weeks 7 & 8 — David J. Malan is exceptional at making concepts stick. Just like with CS50t, you can earn a certificate at the end, but a heads-up: it's heavy on C & Python, and the exercises are a commitment. Choose wisely based on your goals!",
        },

        "Responsive Webdesign - Jonas Schmedtmann": {
          url: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
          imgUrl: "https://i.imgur.com/42qwD05.png",
          imgUrlSm: "responsive_web_design.png",
          iconUrl:
            "https://yt3.ggpht.com/a/AATXAJyJveGzQo6zVpu5T9nFix_z6RqKCTlcyUS1uA=s900-c-k-c0xffffffff-no-rj-mo",
          iconUrlSm: "js.jpg",
          complete: false,
          primary: true,
          description:
            "Udemy frequently offers discounts, so keep an eye out! For just $15, this course is a steal. Taught by the engaging Jonas Schmedtmann, it's a hands-on adventure in HTML and CSS—the building blocks of web dev. Packed with exercises and coding challenges, it's my go-to recommendation for newcomers. Get started and lay a rock-solid web development foundation! Udemy does offer certificates upon course completion, they may not carry as much weight as some other certifications.",
        },

        "Responsive Web Design - freeCodeCamp": {
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
          imgUrl: "https://i.imgur.com/IMUYDqm.png",
          imgUrlSm: "responsive-webdesgin.png",
          iconUrl:
            "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg",
          iconUrlSm: "fcc_logo.jpg",
          complete: false,
          primary: false,
          description:
            "freeCodeCamp is packed with diverse courses, including their newly revamped Responsive Web Design module. Heads up, though: it's text-heavy. If you thrive on visuals, this might be a stretch. While they have a built-in IDE, I'd suggest spending time with local tools like VSCode. The bright side? It's super easy to dive in and code away! Complete the courses and bag yourself a nifty certification from freeCodeCamp!",
        },

        "Advanced CSS - Jonas Schmedtmann": {
          url: "https://www.udemy.com/course/advanced-css-and-sass/",
          imgUrl: "https://i.imgur.com/ynBhPgy.png",
          imgUrlSm: "css.png",
          iconUrl:
            "https://yt3.ggpht.com/a/AATXAJyJveGzQo6zVpu5T9nFix_z6RqKCTlcyUS1uA=s900-c-k-c0xffffffff-no-rj-mo",
          iconUrlSm: "js.jpg",
          complete: false,
          primary: false,
          description: "TODO",
        },

        "The Git & Github Bootcamp - Colt Steele": {
          url: "https://www.udemy.com/course/git-and-github-bootcamp/?course_id=3792262",
          imgUrl: "https://i.imgur.com/02d1R0m.png",
          imgUrlSm: "git_crash_course.png",
          iconUrl:
            "https://logosmarken.com/wp-content/uploads/2021/11/Udemy-Logo.png",
          iconUrlSm: "udemy-logo.png",
          complete: false,
          primary: true,
          description:
            "Quick heads-up: Udemy often has sales, so keep an eye out for deals on courses that usually go for around $15. When it comes to version control, Git is the top choice for most developers and big companies. Dive deep into both Git and GitHub with Colt Steele's comprehensive Udemy course. Udemy does offer certificates upon course completion, they may not carry as much weight as some other certifications.",
        },
      },
    },
    JAVASCRIPT: {
      description:
        "JavaScript isn't just another programming language; it's the global superstar of the coding world! With tech giants like Google, Facebook, and Netflix relying on it, JavaScript lights up websites everywhere.",

      milestones: {
        "JavaScript Zero to Expert Course - Jonas Schmedtmann": {
          url: "https://www.udemy.com/course/the-complete-javascript-course/",
          imgUrl: "https://i.imgur.com/OEb1kmC.png",
          imgUrlSm: "javascript-udemy.png",
          iconUrl:
            "https://yt3.ggpht.com/a/AATXAJyJveGzQo6zVpu5T9nFix_z6RqKCTlcyUS1uA=s900-c-k-c0xffffffff-no-rj-mo",
          iconUrlSm: "js.jpg",
          complete: false,
          primary: true,
          description:
            "Udemy frequently offers discounts, so keep an eye out! For just $15, this course is a steal. Unlock the deep mysteries of JavaScript with Jonas Schmedtmann. This course goes beyond the basics, delving into the intricacies of vanilla JavaScript. By the end, you'll be equipped with insights placing you ahead of 95% of JavaScript developers. Dive in and master the core of web development! And hey, while Udemy hands out certificates at the finish line, remember they're more about the journey than the prestige!",
        },

        "JavaScript Algorithms and Data Structures - FreeCodeCamp": {
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          imgUrl: "https://i.imgur.com/updgkiY.png",
          imgUrlSm: "javascript-freecodecamp.png",
          iconUrl:
            "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg",
          iconUrlSm: "fcc_logo.jpg",
          complete: false,
          primary: false,
          description:
            "Heads up: it's text-heavy. If you thrive on visuals, this might be a stretch. While they have a built-in IDE, I'd suggest spending time with local tools like VSCode. The bright side? It's super easy to dive in and code away! Complete the courses and bag yourself a nifty certification from freeCodeCamp!",
        },
      },
    },
    FRONTEND: {
      description:
        "React.js is the top choice for web and mobile app development, offering full control over your projects. Opt for Next.js and benefit from pre-compiled essential packages for a smoother experience.",

      milestones: {
        "Ultimate React Course - Jonas Schmedtmann": {
          url: "https://www.udemy.com/course/the-ultimate-react-course/",
          imgUrl: "https://i.imgur.com/DaA25aA.png",
          imgUrlSm: "react-jonas.png",
          iconUrl:
            "https://yt3.ggpht.com/a/AATXAJyJveGzQo6zVpu5T9nFix_z6RqKCTlcyUS1uA=s900-c-k-c0xffffffff-no-rj-mo",
          iconUrlSm: "js.jpg",
          complete: false,
          primary: true,
          description:
            "Explore React's depths with Jonas Schmedtmann. While it doesn't cover React Native now, expect it in 2024. By completing this course, you'll surpass 95% of React developers in know-how.",
        },

        "React Complete Guide - Maximilian Schwartzmüller": {
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?kw=react&src=sac",
          imgUrl: "https://i.imgur.com/S2WpjD6.png",
          imgUrlSm: "react-max.png",
          iconUrl:
            "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
          iconUrlSm: "react_logo.jpg",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "React Zero to Mastery Course - ZTM": {
          url: "https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/?kw=react+zero+to+mastery&src=sac",
          imgUrl: "https://i.imgur.com/9ETBugX.pngg",
          imgUrlSm: "react-zero.png",
          iconUrl:
            "https://dev.mrdbourke.com/tensorflow-deep-learning/assets/misc-ztm-logo.png",
          iconUrlSm: "ztm-logo.png",
          complete: false,
          primary: false,
          description: "TODO",
        },

        "Next.js Complete Guide - Maximilian Schwartzmüller": {
          url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
          imgUrl: "https://i.imgur.com/fBDzVwO.png",
          imgUrlSm: "nextjs-max.png",
          iconUrl:
            "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png",
          iconUrlSm: "nextjs_logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "Meta Frontend Developer Course - Meta": {
          url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
          imgUrl: "https://i.imgur.com/gI5U4l7.png",
          imgUrlSm: "meta-frontend.png",
          iconUrl:
            "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",

          iconUrlSm: "nextjs_logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "React Native Course - Maximilian Schwartzmüller": {
          url: "https://www.udemy.com/course/react-native-the-practical-guide/",
          imgUrl: "https://i.imgur.com/bQMfkpw.png",
          imgUrlSm: "react-native.png",
          iconUrl:
            "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
          iconUrlSm: "nextjs_logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },
      },
    },

    BACKEND: {
      description:
        "Ready to expand your horizons? Beyond frontend lies the powerful realm of backend tech. Dive in and begin your transformative journey into Full Stack development!",
      milestones: {
        "Node.js & Express.js and MongoDB Complete Course - Jonas Schmedtmann":
          {
            url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
            imgUrl: "https://i.imgur.com/1Dr3uTH.png",
            imgUrlSm: "nodejs.png",
            iconUrl:
              "https://yt3.ggpht.com/a/AATXAJyJveGzQo6zVpu5T9nFix_z6RqKCTlcyUS1uA=s900-c-k-c0xffffffff-no-rj-mo",
            iconUrlSm: "js.jpg",
            complete: false,
            primary: true,
            description: "TODO",
          },

        "Docker & Kubernetes Course - Maximilian Schwartzmüller": {
          url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/",
          imgUrl: "https://i.imgur.com/LRcN0L0.png",
          imgUrlSm: "docker.png",
          iconUrl:
            "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
          iconUrlSm: "docker_logo.jpg",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "Webpack 5 Complete Guide - Udemy": {
          url: "https://www.udemy.com/course/webpack-from-beginner-to-advanced/",
          imgUrl: "https://i.imgur.com/0PSTdYj.png",
          imgUrlSm: "webpack.png",
          iconUrl:
            "https://paulmiller3000.com/wp-content/uploads/Webpack-logo.png",
          iconUrlSm: "webpack-logo.png",
          complete: false,
          primary: false,
          description: "TODO",
        },
      },
    },

    DATABASES: {
      description:
        "Ready to master data storage? Dive deep and learn how to manage and persist every bit of crucial information!",
      milestones: {
        "MongoDB & Mongoose - Jonas Schmedtmann": {
          url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
          imgUrl: "https://i.imgur.com/1Dr3uTH.png",
          imgUrlSm: "nodejs.png",
          iconUrl:
            "https://yt3.ggpht.com/a/AATXAJyJveGzQo6zVpu5T9nFix_z6RqKCTlcyUS1uA=s900-c-k-c0xffffffff-no-rj-mo",
          iconUrlSm: "js.jpg",
          complete: false,
          primary: true,
          description:
            "One of the most common NoSQL databases in production environment.",
        },

        "MongoDB & Mongoose - FreeCodeCamp": {
          url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/mongodb-and-mongoose/install-and-set-up-mongoose",
          imgUrl:
            "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
          imgUrlSm: "mongo_db.jpg",
          iconUrl:
            "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg",
          iconUrlSm: "fcc_logo.jpg",
          complete: false,
          primary: false,
          description:
            "One of the most common NoSQL databases in production environment.",
        },

        "FreeCodeCamp - Relational Databases": {
          url: "https://www.freecodecamp.org/learn/relational-database/",
          imgUrl: "https://i.imgur.com/0AmFayz.png",
          imgUrlSm: "fcc_sql.jpg",
          iconUrl:
            "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg",
          iconUrlSm: "fcc_logo.jpg",
          complete: false,
          primary: true,
          description:
            "From writing bash scripts to coding and populating databases with celestial bodies - there's plently to learn.",
        },

        "SQL Bootcamp - Udemy": {
          url: "https://www.udemy.com/course/the-complete-sql-bootcamp/",
          imgUrl: "https://i.imgur.com/5OinOqK.png",
          imgUrlSm: "sql.png",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png",
          iconUrlSm: "postgresql.png",
          complete: false,
          primary: true,
          description: "TODO",
        },
      },
    },
    EXTRAS: {
      description:
        "Want to go beyond the basics and really stand out as a React developer? Brush up on some extra technologies, frameworks, and soft skills to make sure you're the full package!",
      milestones: {
        "TypeScript Course - Maximilian Schwartzmüller": {
          url: "https://www.udemy.com/course/understanding-typescript/",
          imgUrl: "https://i.imgur.com/3jXM4Dz.png",
          imgUrlSm: "ts.png",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
          iconUrlSm: "ts-logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "AWS Fundamentals - AWS": {
          url: "https://www.coursera.org/professional-certificates/aws-cloud-solutions-architect",
          imgUrl: "https://i.imgur.com/BIvfLiC.png",
          imgUrlSm: "aws.png",
          iconUrl:
            "https://www.theeggbrussels.com/wp-content/uploads/2018/05/logo-AWS-1024x658.png",
          iconUrlSm: "aws-logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "Master The Coding Interview - ZTM": {
          url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
          imgUrl: "https://i.imgur.com/fZuMlJR.png",
          imgUrlSm: "interview.png",
          iconUrl:
            "https://dev.mrdbourke.com/tensorflow-deep-learning/assets/misc-ztm-logo.png",
          iconUrlSm: "ztm-logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "Neet Code": {
          url: "https://neetcode.io/courses",
          imgUrl: "https://i.imgur.com/Rh3DKV1.png",
          imgUrlSm: "neetcode.png",
          iconUrl:
            "https://yt3.ggpht.com/FqiGBOsNpeWbNw20ULboW0jy88JdpqFO9a-YRJ0C2oc4lZ8uoHYJ38PWSkrjdC_zQgNW9pGU=s240-c-k-c0x00ffffff-no-rj",
          iconUrlSm: "neetcode-logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },

        "Leet Code": {
          url: "https://leetcode.com/explore/",
          imgUrl: "https://i.imgur.com/3oD2wls.png",
          imgUrlSm: "leetcode.png",
          iconUrl:
            "https://i0.wp.com/turingplanet.org/wp-content/uploads/2020/05/LeetCode_logo.png?resize=400%2C400&ssl=1",
          iconUrlSm: "leetcode-logo.png",
          complete: false,
          primary: true,
          description: "TODO",
        },
      },
    },
  },
};

const initialValue = browser
  ? JSON.parse(window.localStorage.getItem("szabolcsnagyRoadmap")) ?? defaultObj
  : defaultObj;
const store = writable(initialValue);

store.subscribe((val) => {
  if (browser) {
    window.localStorage.setItem("szabolcsnagyRoadmap", JSON.stringify(val));
  }
});

export default store;
