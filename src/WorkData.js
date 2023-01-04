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
  ];
};

export default workData;
