import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/custom.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Slider from './Slider/Slider';
import About from './About/About';
import Services from './Services/Services';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [components, setComponents] = useState([]);
  const [about, setAbout] = useState([]);
  const [service, setService] = useState([]);
  const [serviceDescription, setServiceDescription] = useState([]);

  const componentsCollectionRef = collection(db, 'Navbar');
  const aboutCollectionRef = collection(db, 'About');
  const serviceCollectionRef = collection(db, 'Service');

  useEffect(() => {
    getComponents();
    getAboutContent();
    getServiceContent();
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

  const getServiceContent = async () => {
    const data = await getDocs(serviceCollectionRef);
    const serviceData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // serviceData.sort((a, b) => (a.order > b.order ? 1 : -1));
    let serviceDes = serviceData.filter((x) => x.category == 'description');
    setService(serviceData.filter((x) => x.category == 'tabs')); //aboutData.filter((x) => x.active)
    setServiceDescription(serviceDes);
  };

  const reloadHeader = async () => {
    return getComponents();
  };
  const reloadAbout = async () => {
    return getAboutContent();
  };
  const reloadService = async () => {
    return getServiceContent();
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} reload={reloadHeader} />
            <Slider />
            <Footer />
          </div>
        }
      ></Route>
      <Route
        path="about"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} reload={reloadHeader} />
            <About items={about} reload={reloadAbout} reload={reloadHeader} />
            <Footer />
          </div>
        }
      ></Route>
      <Route
        path="services"
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} reload={reloadHeader} />
            <Services
              items={service}
              reload={reloadService}
              serviceDes={serviceDescription}
            />
            <Footer />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
