function Penjelasan({judul, isi}){
    return(
        <>
            <h1 className="text-2xl sm:text-6xl uppercase text-center pb-2 sm:pb-8 pt-4 sm:pt-32 font-extrabold font-coba mx-12 sm:mx-0">{judul}</h1>
            <p className="text-xl sm:text-3xl text-center pb-12 sm:pb-24 font-coba font-light mx-12 sm:mx-0">{isi}</p>
        </>
    );
}

export default Penjelasan;