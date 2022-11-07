import './index.css'
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactMe from './ContactMe';


function App() {
  
  return (
    <main className="bg-whitebrown sm:px-16 lg:px-32 xl:px-60 flex flex-col px-0">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ContactMe' element={<ContactMe/>}/>
      </Routes>
      
    </main>
  );
}

export default App;
