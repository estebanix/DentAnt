import styles from "./SideMenu.module.scss";

import { sideMenuItems } from "../../utils/constans/sideMenuItems";
import { Image } from "../Image";
import { Link } from "react-router-dom";

export const SideMenu = () => {
    return(
        <div
            className={styles.headerContainer}
        >
            <Image />
            {sideMenuItems.map((item, index) => {
                return <Link to={item.to}><p className={styles.itemText} key={index}>{item.title}</p></Link>
            })}
        </div>
    );
}