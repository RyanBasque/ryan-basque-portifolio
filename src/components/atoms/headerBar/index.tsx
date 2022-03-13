import { Contacts } from "../";

import {
  HeaderContainer,
  HeaderTitle,
  Hamburger,
  HamburgerInput,
} from "./styles";
import { HeaderBarProps } from "./types";

const HeaderBar = ({ handleExpandHeader }: HeaderBarProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <b>Ryan</b>
        Basque
      </HeaderTitle>
      <HamburgerInput
        type="checkbox"
        id="headerCheckbox"
        onChange={handleExpandHeader}
      />
      <Hamburger htmlFor="headerCheckbox">
        <div data-aos="fade-down" data-aos-duration="1000" id="barOne" />
        <div data-aos="fade-down" data-aos-duration="1200" id="barTwo" />
        <div data-aos="fade-down" data-aos-duration="1400" id="barThree" />
      </Hamburger>
      <Contacts isPageDefault={false} />
    </HeaderContainer>
  );
};

export default HeaderBar;
