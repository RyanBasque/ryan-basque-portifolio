import React, { Fragment, useState }  from 'react';
import { HeaderTitle } from './styles';

const HeaderBar = () => {
    const [showBlack, setShowBack] = useState(false);

    window.addEventListener('scroll', () => {
        const topHeight = window.pageYOffset;
        const elementHeight = document.getElementById('firstContainer')?.offsetHeight;
        elementHeight && setShowBack(topHeight > elementHeight + 40);
    });
    return (
        <Fragment>
            <HeaderTitle showInBlack={showBlack}>
                <b>Ryan</b>
                Basque
            </HeaderTitle>
        </Fragment>
    )
};

export default HeaderBar;