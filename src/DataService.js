import { db } from './firebase-config';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
const DataService = () => {
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


  
};




export default DataService;
