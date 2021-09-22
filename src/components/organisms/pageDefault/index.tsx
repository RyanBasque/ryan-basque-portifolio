import React, { Fragment }  from 'react';
import { HeaderBar } from '../../atoms';

import { PageHeaderContainer, PageMainContainer } from './styles';
import { PageDefaultProps } from './types';

const PageDefault = ({ children }: PageDefaultProps) => {

    return (
        <Fragment>
            <PageHeaderContainer>
                <HeaderBar />
            </PageHeaderContainer>
            <PageMainContainer>
                {children}
            </PageMainContainer>
        </Fragment>
    )
};

export default PageDefault;