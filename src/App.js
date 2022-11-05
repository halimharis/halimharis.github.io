import './index.css'
import Nav from './Nav';
import Penjelasan from './Penjelasan';
import Profile_Image from './images/Profile_Icon2.png'
import PenjelasanKecil from './PenjelasanKecil';

function App() {
  return (
    <main className="bg-whitebrown px-60 flex flex-col">
      <Nav/>
      <Penjelasan judul="Designer sekaligus coder" isi={"Selamat datang di portofolioku disini aku akan share tentang diriku beserta semua hasil karya dan kerjaku sampai saat ini"}/>
      <img src={Profile_Image} className="h-64 w-64 self-center mb-28"/>
      <PenjelasanKecil judul="Halo Semuanya ~" isi="Namaku adalah Abdul Haris Halim, biasanya teman temanku memanggilku Halim. Aku adalah seorang Mahasiswa yang sedang menjalani kuliah di Universitas Brawijaya." />

    </main>
  );
}

export default App;
