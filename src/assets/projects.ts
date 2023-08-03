import IProject from '../interfaces/IProject';

export const projects: IProject[] = [
    {
        id: 11,
        name: "Vedge-In",
        description: "Broaden your veggie horizons with the Vedge-In Challenge! Vedge-In is an application designed to help users eat healthier by encouraging them to increase the amount and diversity of vegetables in their diet. Log your veggie intake, challenge your friends, and watch you and your community get stronger and healthier! Group project.",
        tools: ["HTML", "CSS", "TypeScript", "React", "React Router", "Material UI", "Auth0", "NestJS", "Node.js", "TypeORM", "MySQL"],
        image: "/images/vedge-in.jpg",
        site: "https://vedge-in.herokuapp.com/",
        code: "https://github.com/tiffany-brand/veg-out",
        group: "For this application I served as project lead and worked on authentication via Auth0 and front end functionality."
    },
    {
        id: 1,
        name: "Team Builder",
        description: "This application aims to help build teams, foster creativity, and strengthen culture in a remote workforce. It provides a fun way to break the ice in remote meetings and help team members bond. Group project.",
        tools: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Axios", "Express", "Node.js", "Handlebars", "Auth0", "Passport", "MySQL", "Sequelize", "FileStack"],
        image: "/images/team-builder.jpg",
        site: "https://the-team-builder.herokuapp.com/",
        code: "https://github.com/hilbug/the-team-builders",
        group: "For this project I served on the Back-End Team, tasked with authentication, API structure, image handling, and database calls."
    },
    {
        id: 2,
        name: "High Card Picks Dinner",
        description: "Relationship saver app! Help couples, friends, roommates fairly choose who picks dinner and find quality dinner choices. Group project.",
        tools: ["HTML", "CSS", "JavaScript", "JQuery", "MaterializeCSS", "Card and Recipe APIs", "AnimateCSS", "MomentJS", "ChartJS"],
        image: "/images/high-card.jpg",
        site: "https://tiffany-brand.github.io/high-card-picks-dinner/",
        code: "https://github.com/tiffany-brand/high-card-picks-dinner",
        group: "For this project I served as Project Manager and Front-End Designer"
    },
    {
        id: 10,
        name: "Google Books Search and Save",
        description: "Google Books Search and Save is a MERN stack application to search for books using the Google Books API. Users can search for books with the search form. Users can also save a book, which will then appear on the saved books page. Saved books can be viewed or deleted from the database.The application also implements Socket.io messaging to alert all connected users when a book has been saved.",
        tools: ["HTML", "CSS", "JavaScript", "React", "React Router", "Material UI", "Node.js", "Express", "MongoDB", "Mongoose"],
        image: "/images/gb-search-save.jpg",
        site: "https://gb-search-n-save.herokuapp.com/",
        code: "https://github.com/tiffany-brand/google-books-search-and-save",
    },
    {
        id: 7,
        name: "Employee Directory",
        description: "View a table of basic information about employees (employee data loaded from the Random User API). The user can sort the employees by first name, last name, gender, email address, phone number, city or state. Employees can also be filtered on those same fields by entering text into the search field.",
        tools: ["HTML", "CSS", "TypeScript", "React", "Material UI", "Random User API"],
        image: "/images/emp-dir.jpg",
        site: "https://tiffany-brand.github.io/react-ts-employee-directory/",
        code: "https://github.com/tiffany-brand/react-ts-employee-directory",
    },
    {
        id: 3,
        name: "Gourmet Burger Logger",
        description: "The Gourmet Burger Logger is an application built in the MVC pattern to track crafted and devoured burgers. Users enter a burger description to add a burger to the crafted list. Clicking the Devour button marks the burger as eaten, and burgers can also be deleted.",
        image: "/images/gourmet-burger.jpg",
        tools: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Handlebars", "MySQL"],
        site: "https://enigmatic-ravine-90918.herokuapp.com/",
        code: "https://github.com/tiffany-brand/gourmet-burger-logger",

    },
    {
        id: 4,
        name: "Employee Management System",
        description: "The Employee Management System is a command line application to view and manage company employees. The application accesses employee data in a MySQL database which stores employees, departments, and roles.",
        image: "/images/employee-mgmnt.jpg",
        tools: ["Node.js", "Inquirer", "MySQL"],
        site: "https://youtu.be/szqkZ_KQiA4",
        code: "https://github.com/tiffany-brand/employee-management-system",

    },
    {
        id: 5,
        name: "Work Day Scheduler",
        description: "A calendar application that allows a user to plan hourly time blocks in a day. The application displays each hourly block from 9 am to 5 pm and users can save events in each time block.",
        tools: ["HTML", "CSS", "JavaScript", "MomentJS"],
        image: "/images/workday-scheduler.jpg",
        site: "https://tiffany-brand.github.io/work-day-timeblock-planner/",
        code: "https://github.com/tiffany-brand/work-day-timeblock-planner",
    },
    {
        id: 6,
        name: "Weather Dashboard",
        description: "This weather dashboard project allows the user to search for cities and view current weather conditions and a 5 day forecast with data from the OpenWeather API.",
        tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "OpenWeather API", "MomentJS"],
        image: "/images/weather-dash.jpg",
        site: "https://tiffany-brand.github.io/weather-conditions-dashboard/",
        code: "https://github.com/tiffany-brand/weather-conditions-dashboard",
    },
    {
        id: 8,
        name: "Password Generator",
        description: "This project is a password generator which creates secure passwords based on criteria. Users can choose the types of characters to include in the password as well as the length of the password by filling in the presented form.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "/images/pass-gen.jpg",
        site: "https://tiffany-brand.github.io/secure-password-generator/",
        code: "https://github.com/tiffany-brand/secure-password-generator",
    },
    {
        id: 9,
        name: "Code Quiz",
        description: "This project is a timed JavaScript code quiz with a high score hall of fame.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "/images/quiz.jpg",
        site: "https://tiffany-brand.github.io/timed-javascript-code-quiz/",
        code: "https://github.com/tiffany-brand/timed-javascript-code-quiz",
    },

]