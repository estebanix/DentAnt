import { Context } from "../../context/Context";
import { useContext } from 'react';

import { sideMenuItems } from "../../utils/constans/sideMenuItems";

import styles from "./SideMenu.module.scss";

export const SideMenu = () => {
    const {setSiteValue} = useContext(Context);

    const handle = (id : number) => {
        setSiteValue(id)
    }

    return(
        <div
            className={styles.headerContainer}
        >
            {sideMenuItems.map((item, index) => {
                return <p onClick={() => handle(item.id)} className={styles.itemText} key={index}>{item.title}</p>
            })}
        </div>
    );
}