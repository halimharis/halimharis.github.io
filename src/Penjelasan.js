function Penjelasan({judul, isi}){
    return(
        <>
            <h1 className="text-6xl uppercase text-center pb-8 pt-16 font-extrabold font-coba">{judul}</h1>
            <p className="text text-3xl text-center pb-24 font-coba font-light">{isi}</p>
        </>
    );
}

export default Penjelasan;