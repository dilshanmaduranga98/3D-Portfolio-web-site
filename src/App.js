import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Index/Home';
import NavBar from './components/NavBar';
import About from './Index/About';
import Project from './Index/Project';
import ThreeD from './Index/ThreeD';
import HomePage from './Index/HomePage';

function App() {

  return (
    <BrowserRouter>
    <div className='relative'>
        <div className="fixed  top-[240px] left-[10px] z-[100]">
          <NavBar/>
        </div>
        <HomePage/>
        {/* <Home/>  */}

        {/* <ThreeD/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
