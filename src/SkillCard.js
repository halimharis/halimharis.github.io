function SkillCard({ Logo, Judul, Desc, Tools }) {
  return (
    <div className="border-darkbrownblack border-4 self-stretch bg-darkbrown rounded-xl flex flex-col items-center sm:p-8 py-8 px-4 space-y-8 max-w-xs ">
      <div className="flex flex-col gap-4 items-center">
        <img alt="" src={Logo} />
        <h2 className="font-extrabold text-xl">{Judul}</h2>
      </div>
      <p className="text-center text-lg">{Desc}</p>
      <div className="flex flex-wrap justify-center gap-2 py-8 mx-4 ">
        {Tools.map((tool, index) => {
          return (
            <img alt="" className="h-12 rounded-lg" key={index} src={tool} />
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
