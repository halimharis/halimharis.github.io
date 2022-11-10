function PenjelasanKecil({ judul, isi }) {
  return (
    <div className="max-w-screen-lg px-4 sm:px-16">
      <h1 className="text-center font-extrabold text-xl md:text-3xl uppercase mb-2 sm:mb-4">
        {judul}
      </h1>
      <p className="text-center text-lg md:text-xl">{isi}</p>
    </div>
  );
}

export default PenjelasanKecil;
