import React, { Fragment, useState } from "react";
import { HeaderBar } from "../../atoms";

import { PageHeaderContainer, PageMainContainer } from "./styles";
import { PageDefaultProps } from "./types";

const PageDefault = ({ children }: PageDefaultProps) => {
  const [fadeBlur, setFadeBlur] = useState(false);

  window.addEventListener("scroll", (): void => {
    const topHeight = window.pageYOffset;
    setFadeBlur(topHeight > 50);
  });

  return (
    <Fragment>
      <PageHeaderContainer showBlur={fadeBlur}>
        <HeaderBar />
      </PageHeaderContainer>
      <PageMainContainer>{children}</PageMainContainer>
    </Fragment>
  );
};

export default PageDefault;
