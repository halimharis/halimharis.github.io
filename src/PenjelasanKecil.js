function PenjelasanKecil({judul, isi}){
    return(
        <>
            <h1 className="text-3xl uppercase text-center pb-4 pt-16 font-semibold font-coba">{judul}</h1>
            <p className="text text-xl text-center pb-24 font-coba font-light mx-32 border">{isi}</p>
        </>
    );
}

export default PenjelasanKecil;