import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/custom.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Slider from './Slider/Slider';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [components, setComponents] = useState([]);
  const [about, setAbout] = useState([]);
  const [service, setService] = useState([]);
  const [serviceDescription, setServiceDescription] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectsDescription, setProjectsDescription] = useState([]);

  const componentsCollectionRef = collection(db, 'Navbar');
  const aboutCollectionRef = collection(db, 'About');
  const serviceCollectionRef = collection(db, 'Service');
  const projectsCollectionRef = collection(db, 'Projects');

  useEffect(() => {
    getComponents();
    getAboutContent();
    getServiceContent();
    getProjectsContent();
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

  const getProjectsContent = async () => {
    const data = await getDocs(projectsCollectionRef);
    const projectsData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    let serviceDes = projectsData.filter((x) => x.category == 'description');
    setProjects(serviceData.filter((x) => x.category == 'tabs')); //aboutData.filter((x) => x.active)
    setProjectsDescription(serviceDes);
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
  const reloadProjects = async () => {
    return getProjectsContent();
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
        replace
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
        replace
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
      <Route
        path="projects"
        replace
        element={
          <div class="wrapper clearfix" id="wrapperParallax">
            <Header items={components} reload={reloadHeader} />
            <Projects
              items={projects}
              reload={reloadProjects}
              serviceDes={projectsDescription}
            />
            <Footer />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
