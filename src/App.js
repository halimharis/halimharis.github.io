import './index.css'
import Nav from './Nav';
import Penjelasan from './Penjelasan';
import PenjelasanKecil from './PenjelasanKecil';
import SkillCard from './SkillCard';
import WorkCard from './WorkCard';
import { BiMessageDetail } from 'react-icons/bi'
import Footer from './Footer'
import images from './imageHandler'


function App() {
  var testingImage = "bg-[url('./images/testing.jpg')]"
  
  return (
    <main className="bg-whitebrown sm:px-16 lg:px-32 xl:px-60 flex flex-col px-0">
      <Nav/>
      {/* Hero */}
      <Penjelasan judul="Designer sekaligus coder" isi={"Selamat datang di portofolioku disini aku akan share tentang diriku beserta semua hasil karya dan kerjaku sampai saat ini"}/>
      <img src={images['Profile_Icon2.png']} className="h-64 w-64 self-center mb-28"/>
      {/* Hero End */}

      {/* Skill */}
      <PenjelasanKecil judul="Halo Semuanya ~" isi="Namaku adalah Abdul Haris Halim, biasanya teman temanku memanggilku Halim. Aku adalah seorang Mahasiswa yang sedang menjalani kuliah di Universitas Brawijaya." />
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-12 mb-36'>
        <SkillCard Tools={[images['FigjamLogo.png'],images['FigmaLogo.png'],images['UndrawLogo.png'],images['FontAwesomeLogo.png']]} Logo={images['Designer_logo.png']} Judul="UI/UX DESIGNER" Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"/>
        <SkillCard Tools={[images['reactLogo.png'],images['tailwindlogo.png'],images['JSlogo.png']]} Logo={images['Designer_logo.png']} Judul="Front-End Web" Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"/>
      </div>
      {/* Skill End */}

      {/* Work */}
      <PenjelasanKecil judul="Hasil Kerjaku Sampai Saat ini" isi="Dibawah ini adalah hasil kerjaku sejak aku memulai mempelajari design dan front-end website developer" />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-12 sm:mx-8 xl:mx-24 gap-8 mb-48 auto-rows-[minmax(200px,200px)] sm:auto-rows-[minmax(300px,300px)]'>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="etting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
        <WorkCard Judul="Ini Judul" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." BackgroundImage={testingImage}/>
      </div>
      {/* Work End */}

      {/* Contact Me */}
      <div className='flex flex-col lg:flex-row items-center mb-24 md:mb-48 xl:mx-32'>
        <div className='pb-12 lg:pb-0'>
          <h1 className='text-center lg:text-left text-2xl xl:text-3xl uppercase font-bold font-coba mx-12 sm:mx-0 pb-2 md:pb-0'>Tertarik untuk bekerja bersama?</h1>
          <p className='text-center lg:text-left text-lg sm:text-xl font-coba font-light mx-12 sm:mx-0 lg:w-5/6'>Aku selalu tertarik untuk bekerja dibidangku dimanapun itu, apabila aku dapat membantu hubungi saja langsung </p>
        </div>
        <button className='w-max h-min text-xs sm:text-base rounded-xl border-4 border-blackbrown font-semibold hover:text-whitebrown hover:bg-darkbrown hover:border-darkbrown py-4 px-6 font-coba flex items-center'>
          <BiMessageDetail className='text-2xl lg:text-5xl mr-4 '/>
          Kirim Email Sekarang Juga
        </button>
      </div>
      {/* Contact Me End */}

      <Footer/>
    </main>
  );
}

export default App;
