import { DataUploader } from "../../../components/DataUploader";

import styles from "./AppContainer.module.scss";

export const AppContainer = () => {
    return (
        <div className={styles.appContainer}>
            <DataUploader />
        </div>
    );
}