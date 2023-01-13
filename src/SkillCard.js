function SkillCard({ Logo, Judul, Desc, Tools }) {
  return (
    <div className="w-5/6 md:w-1/2 border-darkbrownblack border-4 bg-darkbrown rounded-xl flex flex-col sm:p-8 py-8 px-4 space-y-8">
      <div className="flex flex-col gap-4 items-center">
        <span className="text-whitebrown text-7xl">{Logo}</span>
        <h2 className="font-extrabold text-xl text-whitebrown text-center">
          {Judul}
        </h2>
      </div>
      <p className="text-center text-md text-whitebrown h-full opacity-80 ">
        {Desc}
      </p>
      <div className="flex flex-wrap justify-center gap-2 py-4 ">
        {Tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="h-16 w-16 rounded-full bg-whitebrown flex justify-center items-center"
            >
              <img src={tool} alt="" className="h-8 w-8" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
