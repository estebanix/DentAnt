import { Image } from "../Image";
import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";

import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = () => {
    return (
        <div className={styles.headerMenuContainer}>
            <Image />
            <div className={styles.headerMenuItemBox}>
                {headerMenuItems.map((item, index) => {
                    return <Link to={item.to}><p key={index}>{item.title}</p></Link>
                })}
            </div>
        </div>
    );
}