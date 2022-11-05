function PenjelasanKecil({judul, isi}){
    return(
        <div className="mt-12 mb-32">
            <h1 className="text-4xl uppercase text-center pb-4 font-semibold font-coba">{judul}</h1>
            <p className="text text-xl text-center font-coba font-light mx-32 ">{isi}</p>
        </div>
    );
}

export default PenjelasanKecil;