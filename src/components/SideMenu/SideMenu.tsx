import { sideMenuItems } from "../../utils/constans/sideMenuItems";
import { Image } from "../Image";
import { Link } from "react-router-dom";
import logo from "./../../../public/icons/logo.jpg"

import styles from "./SideMenu.module.scss";

export const SideMenu = () => {
    return(
        <div
            className={styles.headerContainer}
        >
            <Image src={logo} />
            {sideMenuItems.map((item, index) => {
                return <Link to={item.to}><p className={styles.itemText} key={index}>{item.title}</p></Link>
            })}
        </div>
    );
}