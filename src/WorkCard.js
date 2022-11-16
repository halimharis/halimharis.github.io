import { VscArrowRight } from "react-icons/vsc";

function WorkCard({ Judul, Desc, BackgroundImage, onClickWorkCard }) {
  return (
    <div
      className={`border-darkbrownblack border-4 group p-8 flex flex-col justify-between rounded-xl relative bg-cover min-w-fit max-w-xs text-darkbrownblack overflow-hidden`}
    >
      <img
        className="absolute h-full w-full top-0 left-0 object-cover object-top"
        src={BackgroundImage}
        alt=""
      />
      <div className="absolute opacity-20 group-hover:opacity-95 bg-darkbrown h-full w-full top-0 left-0 z-0"></div>
      <div className="opacity-0 group-hover:opacity-100 mb-12 z-10">
        <h2 className="text-lg font-bold">{Judul}</h2>
        <p className="line-clamp-3 sm:line-clamp-5">{Desc}</p>
      </div>
      <button
        onClick={onClickWorkCard}
        className=" border-darkbrownblack border-2 gap-2 py-1 px-4 rounded-md opacity-0 group-hover:opacity-100 w-max self-end z-10 flex flex-row items-center hover:text-whitebrown hover:bg-darkbrownblack"
      >
        View Work
        <VscArrowRight className="text-xl" />
      </button>
    </div>
  );
}

export default WorkCard;
