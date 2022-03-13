import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { HeaderNav } from "./styles";

interface ContactsProps {
  isPageDefault: boolean;
}

const Contacts = ({ isPageDefault }: ContactsProps) => {
  return (
    <HeaderNav isPageDefault={isPageDefault}>
      <ul>
        <li data-aos="fade-up" data-aos-duration="1500">
          <a
            href="https://www.instagram.com/wigbas/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </li>
        <li data-aos="fade-up" data-aos-duration="2000">
          <a
            href="https://www.linkedin.com/in/ryan-basque-1688761b0/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
        <li data-aos="fade-up" data-aos-duration="2500">
          <a
            href="https://api.whatsapp.com/send?phone=5511951083595"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
        </li>
        <li data-aos="fade-up" data-aos-duration="2800">
          <a
            href="mailto:ryanbasquedev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
          </a>
        </li>
      </ul>
    </HeaderNav>
  );
};

export default Contacts;
