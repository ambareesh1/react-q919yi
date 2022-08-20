import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/custom.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import About from './About/About';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [components, setComponents] = useState([]);
  const componentsCollectionRef = collection(db, 'Navbar');

  useEffect(() => {
    const getComponents = async () => {
      const data = await getDocs(componentsCollectionRef);
      const componentdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      componentdata.sort((a, b) => (a.order > b.order ? 1 : -1));
      setComponents(componentdata);
    };
    getComponents();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} />
            <Slider />
            <About />
          </div>
        }
      ></Route>
      <Route
        path="about"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} /> <About />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
