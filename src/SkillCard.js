function SkillCard({Logo, Judul, Desc, Tools}){
    return(
        <div className="flex flex-col bg-darkbrown w-2/5 items-center pt-16 pb-16 mb-16 rounded-xl">
            <div className="flex items-center justify-center mb-4">
                <img src={Logo}/>
                <h2 className="font-coba font-bold text-xl">{Judul}</h2>
            </div>
            <p className="text-center px-16 font-coba pb-16 ">{Desc}</p>
            <span className="font-black font-coba ">TOOLS YANG DIGUNAKAN</span>
            {/* map buat tampilin tools */}
        </div>
    );
}

export default SkillCard;