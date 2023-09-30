import { HeaderMenu } from "../../components/HeaderMenu";
import { SideMenu } from "../../components/SideMenu";
import { DocsContainer } from "./DocsContainer";
import { BoxRow } from "../../components/BoxRow";
import { Footer } from "../../components/Footer";

import styles from "./DocumentationPage.module.scss";

export const DocumentationPage = () => {
    return (
        <div className={styles.documentationPageContainera}>
                <HeaderMenu />
                <BoxRow>
                    <SideMenu />
                    <DocsContainer />
                </BoxRow>
                <Footer />
        </div>
    );
}