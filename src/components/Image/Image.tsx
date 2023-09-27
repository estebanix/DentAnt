import styles from "./Image.module.scss";

import logo from "./../../../public/icons/logo.jpg"

export const Image = () => {
    return (
        <img className={styles.logo} src={logo} />
    );
}