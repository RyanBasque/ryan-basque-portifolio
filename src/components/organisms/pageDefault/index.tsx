import React, { Fragment, useState } from "react";
import { HeaderBar } from "../../atoms";

import { PageHeaderContainer, PageMainContainer } from "./styles";
import { PageDefaultProps } from "./types";

const PageDefault = ({ children }: PageDefaultProps) => {
  const [fadeBlur, setFadeBlur] = useState(false);
  const [showBlack, setShowBlack] = useState(false);

  window.addEventListener("scroll", (): void => {
    const topHeight = window.pageYOffset;
    const elementHeight =
      document.getElementById("firstContainer")?.offsetHeight;

    elementHeight && setShowBlack(topHeight > elementHeight + 40);
    setFadeBlur(topHeight > 50);
  });

  return (
    <Fragment>
      <PageHeaderContainer showBlur={fadeBlur} showBlack={showBlack}>
        <HeaderBar />
      </PageHeaderContainer>
      <PageMainContainer>{children}</PageMainContainer>
    </Fragment>
  );
};

export default PageDefault;
