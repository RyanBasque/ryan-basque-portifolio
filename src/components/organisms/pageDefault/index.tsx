import React, { Fragment, useState } from "react";
import { Contacts, HeaderBar } from "../../atoms";

import { PageHeaderContainer, PageMainContainer } from "./styles";
import { PageDefaultProps } from "./types";

const PageDefault = ({
  children,
  fadeHeaderBlur,
  showHeaderInBlack,
}: PageDefaultProps) => {
  const [showBlur, setShowBlur] = useState(false);

  const handleExpandHeader = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const header = document.getElementById("pageHeaderContainer");
    const hamburger = document.querySelector("label[for=headerCheckbox]");

    if (header && target.checked) {
      header.style.height = "85px";
      hamburger?.classList.add("open");

      setShowBlur(true);
    } else if (header) {
      header.style.height = "45px";
      hamburger?.classList.remove("open");

      setShowBlur(false);
    }
  };

  return (
    <Fragment>
      <PageHeaderContainer
        showBlur={fadeHeaderBlur || showBlur}
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
