import { HeaderMenu } from "../../components/HeaderMenu";
import { Article } from "../../components/Article";
import texts from "./../../../public/locales/texts.json";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
    const { homePageMainTitle, homePageMainText } = texts;
    return(
        <div className={styles.homePageContainer}>
            <HeaderMenu />
            <Article 
                title={homePageMainTitle} 
                text={homePageMainText} 
                right={false}
            />
        </div>
    );
}