import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/custom.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import About from './About/About';
import Services from './Services/Services';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [components, setComponents] = useState([]);
  const [about, setAbout] = useState([]);
  const componentsCollectionRef = collection(db, 'Navbar');
  const aboutCollectionRef = collection(db, 'About');

  useEffect(() => {
    getComponents();
    getAboutContent();
  }, []);
  const getComponents = async () => {
    const data = await getDocs(componentsCollectionRef);
    const componentdata = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    componentdata.sort((a, b) => (a.order > b.order ? 1 : -1));
    setComponents(componentdata.filter((x) => x.active));
  };
  const getAboutContent = async () => {
    const data = await getDocs(aboutCollectionRef);
    const aboutData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    aboutData.sort((a, b) => (a.order > b.order ? 1 : -1));
    setAbout(aboutData); //aboutData.filter((x) => x.active)
  };
  const reloadHeader = async () => {
    return getComponents();
  };
  const reloadAbout = async () => {
    return getAboutContent();
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} reload={reloadHeader} />
            <Slider />
            <About items={about} reload={reloadAbout} />
          </div>
        }
      ></Route>
      <Route
        path="about"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} />
            <About items={about} reload={reloadAbout} />
          </div>
        }
      ></Route>
      <Route
        path="services"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} />
            <Services items={about} reload={reloadAbout} />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
