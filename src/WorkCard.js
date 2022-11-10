import { VscArrowRight } from "react-icons/vsc";

function WorkCard({ Judul, Desc, BackgroundImage }) {
  return (
    <div
      className={`group ${BackgroundImage} p-8 flex flex-col rounded-xl relative bg-cover min-w-fit max-w-xs text-whitebrown overflow-hidden`}
    >
      <div className="absolute opacity-60 group-hover:opacity-100 bg-blackbrown h-full w-full top-0 left-0 z-0"></div>
      <div className="opacity-0 group-hover:opacity-100 mb-12 z-10">
        <h2 className="text-lg">{Judul}</h2>
        <p className=" line-clamp-6">{Desc}</p>
      </div>
      <button className="border gap-2 py-1 px-4 rounded-md opacity-0 group-hover:opacity-100 w-max self-end z-10 flex flex-row items-center hover:bg-darkbrown hover:border-darkbrown">
        View Work
        <VscArrowRight className="text-xl" />
      </button>
    </div>
  );
}

export default WorkCard;
