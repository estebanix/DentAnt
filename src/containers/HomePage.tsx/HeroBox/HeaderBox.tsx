import { Article } from "../../../components/Article";
import { Button } from "../../../components/Button";
import texts from "./../../../../public/locales/texts.json";

import styles from "./HeaderBox.module.scss";

export const HeroBox = () => {
    const {homePageMainTitle, homePageMainText} = texts;
    return (
        <div className={styles.heroBoxContainer}>
            <Article 
                    title={homePageMainTitle} 
                    text={homePageMainText} 
            />
            <div className={styles.btnBox}>
                <Button text="Documentation" colorVariant="primary" />
                <Button text="App" colorVariant="secondary" />
            </div>
        </div>
    );
}