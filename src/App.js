import './index.css'
import Nav from './Nav';
import Penjelasan from './Penjelasan';
import Profile_Image from './images/Profile_Icon2.png'
import PenjelasanKecil from './PenjelasanKecil';
import SkillCard from './SkillCard';
import Designer_Image from './images/Designer_logo.png';
import WorkCard from './WorkCard';
import { BiMessageDetail } from 'react-icons/bi'
import Footer from './Footer'

function App() {
  var testingImage = "bg-[url('./images/testing.jpg')]"

  return (
    <main className="bg-whitebrown px-60 flex flex-col">
      <Nav/>
      <Penjelasan judul="Designer sekaligus coder" isi={"Selamat datang di portofolioku disini aku akan share tentang diriku beserta semua hasil karya dan kerjaku sampai saat ini"}/>
      <img src={Profile_Image} className="h-64 w-64 self-center mb-28"/>
      <PenjelasanKecil judul="Halo Semuanya ~" isi="Namaku adalah Abdul Haris Halim, biasanya teman temanku memanggilku Halim. Aku adalah seorang Mahasiswa yang sedang menjalani kuliah di Universitas Brawijaya." />
      <div className='flex justify-center space-x-12 mb-36'>
        <SkillCard Logo={Designer_Image} Judul="UI/UX DESIGNER" Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"/>
        <SkillCard Logo={Designer_Image} Judul="UI/UX DESIGNER" Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"/>
      </div>
      <PenjelasanKecil judul="Hasil Kerjaku Sampai Saat ini" isi="Dibawah ini adalah hasil kerjaku sejak aku memulai mempelajari design dan front-end website developer" />
      <div className='grid grid-cols-3 gap-8 mb-48 auto-rows-[minmax(300px,300px)]'>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="etting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
      </div>
      <div className='flex items-center mb-48'>
        <div>
          <h1 className='text-3xl uppercase font-bold font-coba'>Tertarik untuk bekerja bersama?</h1>
          <p className='text text-xl font-coba font-light w-5/6'>Aku selalu tertarik untuk bekerja dibidangku dimanapun itu, apabila aku dapat membantu hubungi saja langsung </p>
        </div>
        <button className='w-max h-min rounded-xl border-4 border-blackbrown font-semibold hover:text-whitebrown hover:bg-darkbrown hover:border-darkbrown py-4 px-6 font-coba flex items-center'>
          <BiMessageDetail className='text-5xl'/>
          Kirim Email Sekarang Juga
        </button>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
