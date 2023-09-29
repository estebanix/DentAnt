import { HeaderMenu } from "../../components/HeaderMenu";
import { Article } from "../../components/Article";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import texts from "./../../../public/locales/texts.json";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
    const { homePageMainTitle, homePageMainText, homePageSecondTitle, homePageSecondText, homePageThirdTitle, homePageThirdText } = texts;
    return(
        <div className={styles.homePageContainer}>
            <HeaderMenu />
            <Section>
                <Article 
                    title={homePageMainTitle} 
                    text={homePageMainText} 
                />
            </Section>
            <Section>
                <Button text="Documentation" />
            </Section>
            <Section>
                <Article 
                    title={homePageSecondTitle} 
                    text={homePageSecondText} 
                />
            </Section>
            <Section>
                <Article 
                    title={homePageThirdTitle} 
                    text={homePageThirdText} 
                />
            </Section>
        </div>
    );
}