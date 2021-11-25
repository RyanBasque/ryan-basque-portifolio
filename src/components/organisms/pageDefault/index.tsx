import React, { Fragment, useState } from "react";
import { HeaderBar } from "../../atoms";

import { PageHeaderContainer, PageMainContainer } from "./styles";
import { PageDefaultProps } from "./types";

const PageDefault = ({
  children,
  fadeHeaderBlur,
  showHeaderInBlack,
}: PageDefaultProps) => {
  return (
    <Fragment>
      <PageHeaderContainer
        showBlur={fadeHeaderBlur}
        showBlack={showHeaderInBlack}
      >
        <HeaderBar />
      </PageHeaderContainer>
      <PageMainContainer>{children}</PageMainContainer>
    </Fragment>
  );
};

export default PageDefault;
