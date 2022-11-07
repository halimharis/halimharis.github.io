import { type } from "@testing-library/user-event/dist/type";

function SkillCard({Logo, Judul, Desc, Tools}){
    return(
        <div className="flex flex-col bg-darkbrown w-4/5 xl:w-2/6 items-center pt-8 sm:pt-16 pb-16 rounded-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <img src={Logo}/>
                <h2 className="font-coba font-bold text-xl">{Judul}</h2>
            </div>
            <p className="text-center px-8 sm:px-16 font-coba pb-16 ">{Desc}</p>
            <span className="font-black font-coba mx-4 sm:mx-0 sm:text-lg text-center">TOOLS YANG DIGUNAKAN</span>
            <div className="grid grid-cols-2 gap-4 mt-8 px-4 sm:mx-0">
                {Tools.map((tool,index)=>{
                    return <img className="rounded-md h-16" key={index} src={tool} />
                })}
            </div>
            {/* map buat tampilin tools */}
        </div>
    );
}

export default SkillCard;