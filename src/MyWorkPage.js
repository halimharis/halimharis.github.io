import { useEffect } from "react";
import images from "./imageHandler";

//

function MyWorkPage() {
  useEffect(() => {
    const carousel = document.getElementById("halo");
    if (carousel != null) {
      carousel.addEventListener("wheel", (event) => {
        carousel.scrollLeft += event.deltaY * 0.2;
        event.preventDefault();
      });
    }
  }, []);

  return (
    <div className="flex flex-col mt-16 max-w-screen-lg w-screen overflow-hidden">
      <section className="w-full relative">
        <img src={images["ifelseWebsite.png"]} alt="" className="w-full" />
        <div className="flex flex-col text-whitebrown justify-center items-center bg-blackbrown w-full absolute h-full top-0 left-0 opacity-80">
          <h1 className="text-lg sm:text-4xl font-extrabold">
            IFELSE WEBSITE 2022
          </h1>
          <p className="text-base sm:text-xl opacity-80">
            Website untuk masa pengenalan mahasiswa baru
          </p>
        </div>
      </section>
      <section className="flex flex-col text-left mt-12 space-y-2 mx-8">
        <h1 className="text-2xl font-extrabold">Apa sih ini?</h1>
        <p>
          If Else adalah sebuah kegiatan yang diadakan oleh Himpunan Mahasiswa
          Teknik Informatika untuk mengenalkan lingkungan sekolah kepada
          mahasiswa baru, atau biasanya dikenal juga sebagai ospek prodi
        </p>
      </section>
      <section className="flex flex-row items-center border my-24">
        <section className="flex flex-col text-left space-y-2 mx-8">
          <h1 className="text-2xl font-extrabold">
            Apa yang kukerjakan disini?
          </h1>
          <h2 className="">Product Manager</h2>
          <li>Riset tentang kebutuhan yang ada di website</li>
          <li>Testing Fungsionalitas yang sudah dibuat dari developer</li>
          <h2>Front End Developer</h2>
          <li>Melakukan kodingan pada dashboard dari admin website tersebut</li>
        </section>
        <section
          id="halo"
          className="h-80 w-full flex flex-col overflow-x-scroll items-center relative scrollbar-hide"
        >
          <div className="flex flex-nowrap space-x-4 snap-x">
            <div className="bg-darkbrown h-80 w-64">1</div>
            <div className="bg-darkbrown h-80 w-64">2</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default MyWorkPage;
