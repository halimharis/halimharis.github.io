import images from "./imageHandler";

const workData = () => {
  return [
    {
      id: 1,
      namaPekerjaan: "IFELSE WEBSITE",
      URL: "https://ifelse.ub.ac.id/home",
      FE: true,
      UIUX: false,
      tag: [
        {
          image: images["visual-studio_logo.png"],
          penjelasan: "Front-End Development Project",
        },
        {
          image: images["reactLogo.png"],
          penjelasan: "ReactJS Library",
        },
        {
          image: images["bootstrap_logo.png"],
          penjelasan: "Bootstrap CSS",
        },
        {
          image: images["axios_logo.png"],
          penjelasan: "API with Axios",
        },
      ],
      // tag: ["Front-End", "Website", "Bootstrap", "OnGoing"],
      Desc: "IF ELSE, short for Informatics Education and Learning for Society Enhancement, is a program designed for new students and organized as part of the Freshmen Mentoring Program (PROBINMABA) at the Faculty of Computer Science (FILKOM) at the University of Brawijaya (UB). The event aims to serve as an introduction for new students to the Informatics Engineering program at FILKOM UB. Meanwhile, the website created for the IF ELSE event aims to assist in the event's execution by providing information related to grades and other information about the activities within the event.",
      image: [
        images["ifelseWebsite.png"],
        images["ifelseWebsiteGallery.png"],
        images["ifelseWebsiteTugas.png"],
        images["ifelseWebsiteTugas2.png"],
      ],
    },
    {
      id: 2,
      namaPekerjaan: "MY PORTOFOLIO",
      URL: "/",
      FE: true,
      UIUX: false,
      tag: [
        {
          image: images["visual-studio_logo.png"],
          penjelasan: "Front-End Development Project",
        },
        {
          image: images["reactLogo.png"],
          penjelasan: "Using ReactJS Library",
        },
        {
          image: images["tailwind_skill_logo.png"],
          penjelasan: "Tailwind CSS",
        },
        {
          image: images["react_context_logo.jpg"],
          penjelasan: "Integrated with React Context",
        },
      ],
      // tag: ["Front-End", "Website", "Tailwind", "React", "React Context"],
      Desc: "This website is an online portfolio that showcases my skills, experiences and achievements. It's constantly updated and improved every 3 weeks, it demonstrates my proficiency in Frontend Web Development, including my ability to use React and other libraries. Creating this website helped me to improve my coding skills and be creative, I incorporated different design elements, animations, and user interfaces. This website is a great tool for showcasing my talents and skills to potential employers and clients.",
      image: [
        images["portofiolio_images.png"],
        images["portofiolio_images1.png"],
        images["portofiolio_images2.png"],
      ],
    },
    {
      id: 3,
      namaPekerjaan: "API RECIPE MEAL",
      URL: "https://meal-api-project.netlify.app/",
      FE: true,
      UIUX: false,
      tag: [
        {
          image: images["visual-studio_logo.png"],
          penjelasan: "Front-End Development Project",
        },
        {
          image: images["rest_api_logo.jpg"],
          penjelasan: "Rest API",
        },
        {
          image: images["tailwind_skill_logo.png"],
          penjelasan: "Tailwind CSS",
        },
      ],
      // tag: ["Front-End", "Website", "Tailwind", "API", "Done"],
      Desc: "I recently completed a project as a part of the Dicoding Front-End Developer roadmap. One of the key challenges in this project was integrating an API, specifically the Meal API website, into the project in a way that would allow for search and category filtering functionality. I am pleased to say that I was able to connect the API and implement these features successfully. The process of connecting the API required me to have a good understanding of how APIs work and how to make HTTP requests in JavaScript. By being able to connect the API, I was able to retrieve data from the website and use it to display meals on my project. Furthermore, I also implemented search and category filters to make it easier for users to find the meals they are looking for. This was a great learning experience as it allowed me to practice my skills in API integration and front-end development. Not only that, but it also gave me the opportunity to work with real-world data, which is something that I believe is essential in becoming a better developer.",
      image: [images["MealProject.png"], images["MealProject2.png"]],
    },
    {
      id: 4,
      namaPekerjaan: "SUPER NOTES",
      URL: "https://super-notes-project.netlify.app",
      FE: true,
      UIUX: false,
      tag: [
        {
          image: images["visual-studio_logo.png"],
          penjelasan: "Front-End Development Project",
        },
        {
          image: images["rest_api_logo.jpg"],
          penjelasan: "Rest API",
        },
        {
          image: images["tailwind_skill_logo.png"],
          penjelasan: "Tailwind CSS",
        },
      ],
      // tag: ["Front-End", "Website", "API", "Done"],
      Desc: "I recently finished a project that was a crucial component of the Dicoding React Developer roadmap. The project required me to connect to an API that was provided, and I am proud to say that I was able to connect to it successfully. Not only that, but I also had the opportunity to implement advanced features such as the Context API, which I used to manage states and local storage in a more efficient and organized manner. Additionally, I incorporated the use of React Hooks in the project, which allowed for a more streamlined and efficient way of managing the components and their states. Overall, it was a challenging and rewarding experience, as it allowed me to enhance my skills in React development and solidify my understanding of best practices and modern approaches in web development.",
      image: [
        images["supernote1.png"],
        images["supernote2.png"],
        images["supernote3.png"],
        images["supernote4.png"],
      ],
    },
    {
      id: 5,
      namaPekerjaan: "LAPR APPLICATION",
      URL: "/",
      FE: false,
      UIUX: true,
      tag: [
        {
          image: images["FigmaLogo.png"],
          penjelasan: "UI/UX Project",
        },
        {
          image: images["maze_skill_image.png"],
          penjelasan: "Maze for testing",
        },
      ],
      // tag: ["UIUX", "Mobile App", "Figma", "Done"],
      Desc: "Lapr is an innovative software solution that has been developed with the specific purpose of providing self-service options for customers at restaurants and food courts. This application was designed using Figma, a widely-used tool that allows for the creation of visually appealing and user-friendly interfaces. The main goal of Lapr is to alleviate common problems that customers face when dining out, such as long wait times in queues or difficulties with placing orders. The aim of this software is to streamline the ordering process, making it more efficient and convenient for both customers and staff. Furthermore, Lapr also provides a platform for customers to place orders and make payments from their own devices, thus reducing the need for face-to-face interactions and promoting a more contactless experience.",
      image: [
        images["LaprApp.png"],
        images["LaprAppMockup.png"],
        images["LaprAppMockup2.png"],
        images["LaprAppWireframe.png"],
      ],
    },
  ];
};

export default workData;
