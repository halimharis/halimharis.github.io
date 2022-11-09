function Penjelasan({ judul, isi }) {
  return (
    <div className="">
      <h1 className="text-2xl lg:text-6xl font-extrabold text-center uppercase mb-2 lg:mb-4 mt-8 lg:mt-16">
        {judul}
      </h1>
      <p className="text-xl lg:text-3xl text-center">{isi}</p>
    </div>
  );
}

export default Penjelasan;
