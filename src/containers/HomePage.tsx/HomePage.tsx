import { HeaderMenu } from "../../components/HeaderMenu";
import { Article } from "../../components/Article";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
    return(
        <div className={styles.homePageContainer}>
            <HeaderMenu />
            <Article />
        </div>
    );
}