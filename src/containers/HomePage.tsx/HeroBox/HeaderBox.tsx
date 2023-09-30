import { Article } from "../../../components/Article";
import { Button } from "../../../components/Button";
import { BoxRow } from "../../../components/BoxRow";
import texts from "./../../../../public/locales/texts.json";

import styles from "./HeaderBox.module.scss";
import { Link } from "react-router-dom";

export const HeroBox = () => {
    const {homePageMainTitle, homePageMainText} = texts;
    return (
        <div className={styles.heroBoxContainer}>
            <Article 
                    title={homePageMainTitle} 
                    text={homePageMainText} 
            />
            <BoxRow gapWidth={20}>
                <Link to="/documentation"><Button text="Documentation" colorVariant="primary" /></Link>
                <Link to="/app"><Button text="App" colorVariant="secondary" /></Link>
            </BoxRow>
        </div>
    );
}