
import Header from './components/Header';
import './App.css';
import Navbar from './components/Navbar';
import DropMenu from './components/DropMenu';
// import Banner from './components/Banner';
// import CardsCont from './components/CardsCont';
import Footersec from './components/Footersec';
import Admin from './components/Admin';
import { Route, Routes } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import Home from './components/Home';
import AddItem from './components/AddItem';
import DeleteItem from './components/DeleteItem';
import ViewItem from './components/ViewItem';
import UpdateItem from './components/UpdateItem'
 

function App() {
  return (
   <> 
   
  <Header/>
    <Navbar/> 
    <DropMenu/>
   
  <Routes>
    <Route path="/sidebar-menu" element={<SidebarMenu/>}></Route>
    <Route path="/adminpage" element={<Admin/>}></Route>
    <Route path='/homepage' element={<Home/>}></Route>
    <Route path='/at' element={<AddItem/>}></Route>
    <Route path='/dt' element={<DeleteItem/>}></Route>
    <Route path='/vt' element={<ViewItem/>}></Route>
    <Route path='/ut' element={<UpdateItem/>}></Route>
    <Route path='/s' element={<Admin/>}></Route>
    </Routes>

  
  {/* //  <Banner/> */}
  {/* //  <CardsCont/> */}
    <Footersec/> 
   </>
  );
}

export default App;
