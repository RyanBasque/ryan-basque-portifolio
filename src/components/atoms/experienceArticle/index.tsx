import React, { Fragment } from 'react';

import { 
    DescriptionContainer,
    DotContainer,
    ExperienceArticleContainer,
    ExperiencePainel,
    ExperienceSubTitle,
    ExperienceTitle,
    TitleContainer,
} from './styles';

const ExperienceContainer = () => {

    return (
        <Fragment>
            <ExperienceArticleContainer>
                <ExperiencePainel>
                    <TitleContainer>
                        <ExperienceTitle>Caelum - o começo de uma paixão</ExperienceTitle>
                        <ExperienceSubTitle>Agosto de 2019</ExperienceSubTitle>
                    </TitleContainer>
                    <DescriptionContainer>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate expedita perferendis ullam iste ipsam et aspernatur, eum inventore. Eum quia voluptate enim atque provident quibusdam perferendis eos facilis labore unde.
                    </DescriptionContainer>
                </ExperiencePainel>
            </ExperienceArticleContainer>
            <DotContainer>
                <div />
            </DotContainer>
        </Fragment>
    )
};

export default ExperienceContainer;