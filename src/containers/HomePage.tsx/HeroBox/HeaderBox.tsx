import { Article } from "../../../components/Article";
import { Image } from "../../../components/Image";
import texts from "./../../../../public/locales/texts.json";

import logo from "./../../../../public/icons/logo.jpg";

import styles from "./HeaderBox.module.scss";

export const HeroBox = () => {
    const {homePageMainTitle, homePageMainText} = texts;
    return (
        <div className={styles.heroBoxContainer}>
            <Article 
                    title={homePageMainTitle} 
                    text={homePageMainText} 
            />
            <Image src={logo} />
        </div>
    );
}