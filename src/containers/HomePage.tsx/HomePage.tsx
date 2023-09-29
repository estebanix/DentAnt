import { HeaderMenu } from "../../components/HeaderMenu";
import { Article } from "../../components/Article";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card/Card";
import { HeroBox } from "./HeroBox";
import texts from "./../../../public/locales/texts.json";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
    const { homePageSecondTitle, homePageSecondText, homePageThirdTitle, homePageThirdText } = texts;
    return(
        <div className={styles.homePageContainer}>
            <HeaderMenu />
            <Section>
                <HeroBox />
                <Card />
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