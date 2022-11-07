function PenjelasanKecil({judul, isi}){
    return(
        <div className="mt-12 mb-32">
            <h1 className="text-2xl sm:text-4xl uppercase text-center pb-2 sm:pb-4 font-semibold font-coba mx-12 sm:mx-0">{judul}</h1>
            <p className="text-base sm:text-xl text-center font-coba font-light mx-12 sm:mx-60">{isi}</p>
        </div>
    );
}

export default PenjelasanKecil;