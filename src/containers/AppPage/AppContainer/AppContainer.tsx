import { ResultTable } from "../../../components/ResultTable";
import { TableSwitcher } from "../../../components/TableSwitcher";
import { IndividualSwitcher } from "../../../components/IndividualSwitcher";
import { TestingTable } from "../../../components/TestingTable";
import { DataUploader } from "../../../components/DataUploader";

import styles from "./AppContainer.module.scss";

export const AppContainer = () => {
  

  return (
    <div className={styles.appContainer}>
      <DataUploader />
      <IndividualSwitcher />
      <TableSwitcher />
      <TestingTable />
      <ResultTable />
    </div>
  );
};
