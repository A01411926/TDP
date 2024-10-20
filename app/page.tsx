//app\layout.tsx

"use client";

import React from 'react';
import App from './Components/App';
import Navbar from './Components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-left text-4xl font-bold ml-20 mt-2">
        Espacio de trabajo
      </div>
      <br />
      <App />
      <main></main>
    </div>
  );
};

export default Home;
