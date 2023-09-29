import { HeaderMenu } from "../../components/HeaderMenu";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
    return (
        <div className={styles.appPageContainer}>
            <HeaderMenu />
        </div>
    );
}