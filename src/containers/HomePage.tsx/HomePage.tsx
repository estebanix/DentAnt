import { SideMenu } from "../../components/SideMenu";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
    return(
        <div className={styles.homePageContainer}>
            <SideMenu />
        </div>
    );
}