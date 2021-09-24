import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

import { generateId } from '../utils/idGenerator';

const firebaseConfig = {
    apiKey: 'AIzaSyCY1gvzEavy8dMZezjqk8EDkXWOezRa-1c',
    authDomain: `ryan-basque-portifolio-fa8f4.firebaseapp.com`, 
    databaseURL: `https://ryan-basque-portifolio-fa8f4-default-rtdb.firebaseio.com`,
    projectId: 'ryan-basque-portifolio-fa8f4',
    storageBucket: `ryan-basque-portifolio-fa8f4.appspot.com`,
    messagingSenderId: '313152388697',
    appId: '1:313152388697:web:6a2c615e915f1ceb63fb48',
};

initializeApp(firebaseConfig);

const database = getDatabase();

const getData = (path: string, callback: any) => { 
    const starCountRef = ref(database, `${path}/`);
    
    onValue(starCountRef, (snapshot) => {
      const response = snapshot.val();
      callback(response);
    });

    return 'iaush';
}

const postData = (path: string, value: any) => {
    const db = getDatabase();
    const objectId = generateId(); 

    set(
        ref(db, path + '/' + objectId),
        {
            ...value,
            id: objectId
        },
    );
}

export {
    getData,
    postData,
}