//import { DataUploader } from "../../../components/DataUploader";
import { InputTable } from "../../../components/InputTable";

import styles from "./AppContainer.module.scss";

export const AppContainer = () => {
  return (
    <div className={styles.appContainer}>
      {/*<DataUploader />*/}
      <InputTable />
    </div>
  );
};
