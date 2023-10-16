import { Routes, Route } from 'react-router-dom';

import './App.css';
import React from 'react';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Header from './Header';
import Popup from './Popup';
import Footer from './Footer';


function App() {
  const [isOpenPopup, setOpenPopup] = React.useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/*" element={<Categories onOpen={handleOpenPopup} />}/>
        <Route path="*" element={<div>Not found App</div>} />
      </Routes>
      {isOpenPopup && (
        <Popup onClose={handleClosePopup} />
      )}
      <Footer />
    </div>
  );
}

export default App;
