import React, { Fragment } from "react";
import { Contacts, HeaderBar } from "../../atoms";

import {
  PageDefaultHeaderHamburger,
  PageHeaderContainer,
  PageMainContainer,
} from "./styles";
import { PageDefaultProps } from "./types";

const PageDefault = ({
  children,
  fadeHeaderBlur,
  showHeaderInBlack,
}: PageDefaultProps) => {
  const handleExpandHeader = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const header = document.getElementById("pageHeaderContainer");

    document.querySelector("#barOne");
    document.querySelector("#barTwo");
    document.querySelector("#barThree");

    if (header && target.checked) {
      header.style.height = "100px";
    } else if (header) {
      header.style.height = "45px";
    }
  };

  return (
    <Fragment>
      <PageHeaderContainer
        showBlur={fadeHeaderBlur}
        showBlack={showHeaderInBlack}
        id="pageHeaderContainer"
      >
        <HeaderBar handleExpandHeader={handleExpandHeader} />
        <Contacts isPageDefault />
      </PageHeaderContainer>
      <PageMainContainer>{children}</PageMainContainer>
    </Fragment>
  );
};

export default PageDefault;
