import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DropMenu from './components/DropMenu';
import Home from './components/Home';
import Dashboardj from './components/Dashboardj';
import Addp from './components/Addp';
import Delp from './components/Delp';
import Enchance from './components/Enchance';
import Aboutus from './components/Aboutus';
import See from './components/See';
import TrainingClick from './components/TrainingClick';
import KitsShirts from './components/KitsShirts';
import ShopByPlayer from './components/ShopByPlayer';
import RegisterForm from './components/RegisterForm';
import Contactus from './components/Contactus';
import Question from './components/Question';
import TermsandCo from './components/TermandCo';
import Returns from './components/Returns';
import History from './components/History';
import SignupComponent from './components/SignupUser';
import ProfileComponent from './components/Profile';
import ViewUserPage from './components/ViewUser';
import DeleteComponent from './components/DeleteUser';
import Analytics from './components/Analytics';
import axios from 'axios';

export const Data = createContext();

function App() {
  const [parg, setparg] = useState("Price:");
  const [cart, setcart] = useState(0);
  const [productList, setProductList] = useState([]); // Define productList state
  axios.defaults.withCredentials=true;
  axios.post('https://midwork-silk.vercel.app/');
  return (
    <Data.Provider value={{ parg, cart, setcart, productList, setProductList }}>
      <>
        
        <Routes>
          <Route path='/dashboard/viewproduct' element={<See />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/tohome' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Analytics />} />
          <Route path='/dashboard/addproduct' element={<Addp />} />
          <Route path='/dashboard/deleteproduct' element={<Delp />} />
          <Route path='/dashboard/updateproduct' element={<Enchance />} />
          <Route path='/dashboard/viewproduct' element={<See />} />
          <Route path='/training' element={<TrainingClick />} />
          <Route path='/kits&shirts' element={<KitsShirts />} />
          <Route path='/shopbyplayer' element={<ShopByPlayer />} />
          <Route path='/login' element={<RegisterForm />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/faqs' element={<Question />} />
          <Route path='/view-user' element={<ViewUserPage />} />
          <Route path='/t&co' element={<TermsandCo />} />
          <Route path='/r&r' element={<Returns />} />
          <Route path='/history' element={<History />} />
          <Route path='/signup' element={<SignupComponent />} />
          <Route path='/deleteuser' element={<DeleteComponent />} />
        </Routes>
        
      </>
    </Data.Provider>
  );
}

export default App;


