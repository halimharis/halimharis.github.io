function Penjelasan({judul, isi}){
    return(
        <>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-center pb-2 sm:pb-4 lg:pb-8 pt-12 xl:pt-32 font-extrabold font-coba mx-12 sm:mx-0">{judul}</h1>
            <p className="text-xl sm:text-2xl xl:text-3xl text-center pb-12 xl:pb-24 font-coba font-light mx-12 sm:mx-0">{isi}</p>
        </>
    );
}

export default Penjelasan;