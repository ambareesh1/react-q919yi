import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
const DataService = () => {
  const getServiceContent = async () => {
    const serviceCollectionRef = collection(db, 'Service');
    const data = await getDocs(serviceCollectionRef);
    const serviceData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return serviceData;
  };
};

export default DataService;
