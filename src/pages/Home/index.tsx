import React from 'react';

import { HomeFirstView, HomeSecondView } from '../../components/molecules';
import { PageDefault } from '../../components/organisms';

import { getData } from '../../services/firebase'

const Home = () => {
    const test = async () => {
        try {
            getData('test-data');
        } catch (error) {
            console.log(error);
        }
    };

    test();

    return (
        <PageDefault>
            <HomeFirstView />
            <HomeSecondView />
        </PageDefault>
    );
};

export default Home;