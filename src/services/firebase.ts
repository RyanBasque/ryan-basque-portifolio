import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCY1gvzEavy8dMZezjqk8EDkXWOezRa-1c",
    authDomain: "ryan-basque-portifolio-fa8f4.firebaseapp.com",
    databaseURL: "https://ryan-basque-portifolio-fa8f4-default-rtdb.firebaseio.com",
    projectId: "ryan-basque-portifolio-fa8f4",
    storageBucket: "ryan-basque-portifolio-fa8f4.appspot.com",
    messagingSenderId: "313152388697",
    appId: "1:313152388697:web:6a2c615e915f1ceb63fb48"
};

initializeApp(firebaseConfig);

const database = ref(getDatabase());

const getData = async (path: string) => {
    try {
        const response = get(child(database, path));
        console.log(response);
    } catch (error) {
        console.log(error)
    };
}

export {
    getData,
}