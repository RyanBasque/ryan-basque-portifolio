import React, { useEffect } from 'react';

import { HomeFirstView, HomeSecondView } from '../../components/molecules';
import { PageDefault } from '../../components/organisms';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const Home = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCY1gvzEavy8dMZezjqk8EDkXWOezRa-1c",
        authDomain: "ryan-basque-portifolio-fa8f4.firebaseapp.com",
        databaseURL: "https://ryan-basque-portifolio-fa8f4-default-rtdb.firebaseio.com",
        projectId: "ryan-basque-portifolio-fa8f4",
    };

    const app = firebase.initializeApp(firebaseConfig);

    useEffect(() => {
        async function anyNameFunction() {
            try {
            } catch (e) {
                console.log(e);
            }
        }
        anyNameFunction();
      }, []);

    return (
        <PageDefault>
            <HomeFirstView />
            <HomeSecondView />
        </PageDefault>
    );
};

export default Home;