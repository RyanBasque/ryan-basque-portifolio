import React from 'react';

import { HomeFirstView, HomeSecondView } from '../../components/molecules';
import { PageDefault } from '../../components/organisms';


const Home = () => {
    return (
        <PageDefault>
            <HomeFirstView />
            <HomeSecondView />
        </PageDefault>
    );
};

export default Home;