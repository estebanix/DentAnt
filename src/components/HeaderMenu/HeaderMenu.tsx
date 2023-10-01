import { Image } from "../Image";
import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";
import logo from "./../../../public/icons/logo.jpg";

import styles from "./HeaderMenu.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const HeaderMenu = () => {
    return (
        <div className={styles.headerMenuContainer}>
            <Link to="/"><Image src={logo} /></Link>
            <div className={styles.headerMenuItemBox}>
                {headerMenuItems.map((item, index) => {
                    return <Link to={item.to} className={styles.headerMenuLink}><p key={index}>{item.title}</p></Link>
                })}
            </div>
            <a href="https://github.com/estebanix/DentAnt"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    );
}