import { HeaderMenu } from "../../components/HeaderMenu";
import { SideMenu } from "../../components/SideMenu";
import { DocsContainer } from "./DocsContainer";
import { BoxRow } from "../../components/BoxRow";

import styles from "./DocumentationPage.module.scss";

export const DocumentationPage = () => {
    return (
        <div className={styles.documentationPageContainera}>
                <HeaderMenu />
                <BoxRow>
                    <SideMenu />
                    <DocsContainer />
                </BoxRow>

        </div>
    );
}