import images from "./imageHandler";

const workData = () => {
  return [
    {
      id: 1,
      namaPekerjaan: "Website IFELSE",
      tanggalPekerjaanMulai: new Date("2022-03-25"),
      tanggalPekerjaanBerakhir: new Date("2022-04-25"),
      tag: ["Front-End", "Website", "Bootstrap", "OnGoing"],
      Desc: "If Else adalah sebuah kegiatan yang diadakan oleh Himpunan Mahasiswa Teknik Informatika untuk mengenalkan lingkungan sekolah kepada mahasiswa baru, atau biasanya dikenal juga sebagai ospek prodi",
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
      tag: ["UIUX", "Mobile App", "Figma", "Done"],
      Desc: "Lapr adalah rancangan aplikasi untuk layanan self-service pada suatu restoran atau food court, rancangan ini dibuat menggunakan figma, aplikasi ini akan menyelesaikan masalah pada antrian di restoran dan pemesanan di food court",
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
