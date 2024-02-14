import { BoxRow } from "../BoxRow";
import { BoxColumn } from "../BoxColumn";

import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <BoxRow gapWidth={12}>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </BoxRow>
      <BoxColumn gapWidth={10}>
        <a href="#">Contact & Support</a>
        <a href="#">Support</a>
      </BoxColumn>
    </div>
  );
};
