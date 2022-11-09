function PenjelasanKecil({ judul, isi }) {
  return (
    <div className="max-w-screen-lg px-16">
      <h1 className="text-center font-extrabold text-xl lg:text-4xl uppercase mb-2 sm:mb-4">
        {judul}
      </h1>
      <p className="text-center text-lg lg:text-2xl">{isi}</p>
    </div>
  );
}

export default PenjelasanKecil;
