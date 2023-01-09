import images from "./imageHandler";

const workData = () => {
  return [
    {
      id: 1,
      namaPekerjaan: "IFELSE Website",
      tanggalPekerjaanMulai: new Date("2022-03-25"),
      tanggalPekerjaanBerakhir: new Date("2022-04-25"),
      URL: "https://ifelse.ub.ac.id/home",
      tag: ["Front-End", "Website", "Bootstrap", "OnGoing"],
      Desc: "If Else is an activity held by the Informatics Engineering Student Association to introduce the school environment to new students, or usually known as Study Orientation and Introduction to Study Program Campus (Ospek Prodi).",
      image: [
        images["ifelseWebsite.png"],
        images["ifelseWebsiteGallery.png"],
        images["ifelseWebsiteTugas.png"],
        images["ifelseWebsiteTugas2.png"],
      ],
    },
    {
      id: 2,
      namaPekerjaan: "My Portofolio",
      tanggalPekerjaanMulai: new Date("2022-03-25"),
      tanggalPekerjaanBerakhir: new Date("2022-04-25"),
      URL: "/",
      tag: ["Front-End", "Website", "Tailwind", "React", "React Context"],
      Desc: "This website explains everything about me, I make this website every 3 weeks apart from maintaining my coding skills as well as trying various other new libraries, this website also represents my ability to use react and various other libraries in the world of Frontend Web Developer",
      image: [
        images["portofiolio_images.png"],
        images["portofiolio_images1.png"],
        images["portofiolio_images2.png"],
      ],
    },
    {
      id: 3,
      namaPekerjaan: "API Recipe Meal",
      tanggalPekerjaanMulai: new Date("2022-03-25"),
      tanggalPekerjaanBerakhir: new Date("2022-04-25"),
      URL: "https://meal-api-project.netlify.app/",
      tag: ["Front-End", "Website", "Tailwind", "API", "Done"],
      Desc: "This is a project after running the roadmap from Dicoding Front-End Developer, I managed to connect the API from the Meal API website to be displayed with search and category filters",
      image: [images["MealProject.png"], images["MealProject2.png"]],
    },
    {
      id: 4,
      namaPekerjaan: "Super Notes",
      tanggalPekerjaanMulai: new Date("2022-03-25"),
      tanggalPekerjaanBerakhir: new Date("2022-04-25"),
      URL: "https://super-notes-project.netlify.app",
      tag: ["Front-End", "Website", "API", "Done"],
      Desc: "This is a project after running the roadmap from Dicoding React Developer, Besides successfully connecting the provided API, I also managed to use the Context API to manage existing states together with local storage, and React Hooks.",
      image: [
        images["supernote1.png"],
        images["supernote2.png"],
        images["supernote3.png"],
        images["supernote4.png"],
      ],
    },
    {
      id: 5,
      namaPekerjaan: "Lapr Application",
      tanggalPekerjaanMulai: new Date("2022-03-25"),
      tanggalPekerjaanBerakhir: new Date("2022-04-25"),
      URL: "/",
      tag: ["UIUX", "Mobile App", "Figma", "Done"],
      Desc: "Lapr is an application design for self-service services in a restaurant or food court, this design is made using figma, this application will solve problems in queues at restaurants and orders at food courts",
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
