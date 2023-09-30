import { sideMenuItems } from "../../utils/constans/sideMenuItems";
import { Link } from "react-router-dom";

import styles from "./SideMenu.module.scss";

export const SideMenu = () => {
    return(
        <div
            className={styles.headerContainer}
        >
            {sideMenuItems.map((item, index) => {
                return <Link to={item.to}><p className={styles.itemText} key={index}>{item.title}</p></Link>
            })}
        </div>
    );
}