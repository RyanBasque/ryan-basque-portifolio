import React, { Fragment }  from 'react';
import { ExperienceArticle } from '../../atoms';

import { 
    Container, 
    ExperienceContainer, 
    TitleContainer
} from './styles';

const HomeSecondView = () => {

    return (
        <Fragment>
            <Container>
                <TitleContainer>
                    <h1>Experiência profissional</h1>
                    <p>Agosto de 2019 - atual</p>
                </TitleContainer>
                <ExperienceContainer>
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                    <ExperienceArticle />
                </ExperienceContainer>
            </Container>
        </Fragment>
    )
};

export default HomeSecondView;