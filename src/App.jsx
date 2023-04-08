import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">
       Start Page!
      </h1> */}


      {/* Header  */}
      <Header></Header>

      <Outlet></Outlet>

      {/* footer ..  */}
      <Footer />

    </div>

  );
};

export default App;