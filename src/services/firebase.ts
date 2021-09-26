import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAnalytics } from 'firebase/analytics';

import { generateId } from '../utils/idGenerator';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`, 
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const database = getDatabase();

const getData = (path: string, callback: any) => { 
    const starCountRef = ref(database, `${path}/`);
    
    onValue(starCountRef, (snapshot) => {
      const response = snapshot.val();
      callback(response);
    });
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