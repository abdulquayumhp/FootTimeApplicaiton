import logo from './logo.svg';
import './App.css';
import Banner from './component/Banner/Banner';
import Navbar from './component/Navbar/Navbar';
import Service from './component/Service/Service';

function App() {
  return (
    <div className='bg-[#f0f4ec] w-full h-full'>
      <div className=' '>
        <Navbar />
        <Banner />
        <Service />
      </div>
    </div>
  );
}

export default App;
