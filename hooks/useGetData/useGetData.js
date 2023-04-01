import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';

function useGetData(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const categoryCol = query(
        collection(db, category),
        where('isActive', '==', true),
        where('user', '==', getAuth().currentUser.email)
      );
      /* const querySnapshot = await getDocs(categoryCol);
      const tempData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(tempData); */

      const unsubscribe = onSnapshot(categoryCol, (querySnapshot) => {
        const result = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(result);
        setData(result);
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
}

export default useGetData;
