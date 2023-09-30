import { HeaderMenu } from "../../components/HeaderMenu";
import { AppContainer } from "./AppContainer";
import { Footer } from "../../components/Footer";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
    return (
        <div className={styles.appPageContainer}>
            <HeaderMenu />
            <AppContainer />
            <Footer />
        </div>
    );
}