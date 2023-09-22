import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideNav from './components/SideNav';
import './App.css';
import Home from './components/musicPlayer/Home';
import AlbumList from './components/musicPlayer/AlbumList'
import Player from './components/musicPlayer/Player';
function App() {
  return (
    <div className=' w-full'>
    <div className=' h-screen flex bg-[#FAF1E4] p-8 '>
      
        <SideNav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/albums' element={<AlbumList />}></Route>
          </Routes>
        </BrowserRouter>

    </div>
      <Player />
    </div>
  );
}

export default App;


