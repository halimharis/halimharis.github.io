function Penjelasan({ judul, isi }) {
  return (
    <div className="">
      <h1 className="text-2xl md:text-5xl font-extrabold text-center uppercase mb-2 lg:mb-4 mt-8 lg:mt-16">
        {judul}
      </h1>
      <p className="text-xl md:text-2xl text-center">{isi}</p>
    </div>
  );
}

export default Penjelasan;
