import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
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
