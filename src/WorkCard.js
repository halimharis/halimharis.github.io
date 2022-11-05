function WorkCard({Judul, Desc, BackgroundImage}){
    return(
        <div className={`relative overflow-hidden flex flex-col border bg-darkbrown p-12 justify-between rounded-xl ${BackgroundImage} bg-cover group`}>
            <div className="hidden group-hover:block w-full h-full bg-blackbrown opacity-98 z-0 top-0 right-0 absolute"></div>
            <div className="hidden group-hover:block z-10">
                <h2 className="font-bold font-coba text-lightbrown z-10 text-lg">{Judul}</h2>
                <p className="group-hover:line-clamp-5 text-whitebrown z-10">{Desc}</p>
            </div>
            <button className="hidden border w-max px-4 py-1 self-end mt-8 group-hover:block font-coba text-whitebrown z-10 rounded-xl hover:bg-darkbrown hover:border-darkbrown">View Work</button>
        </div>
    );
}

export default WorkCard;