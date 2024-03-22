import { Button } from "../../../components/Button";
import { ResultTable } from "../../../components/ResultTable";
import { TableSwitcher } from "../../../components/TableSwitcher";

import styles from "./AppContainer.module.scss";
import { IndividualSwitcher } from "../../../components/IndividualSwitcher";
import { TestingTable } from "../../../components/TestingTable";

export const AppContainer = () => {

  return (
    <div className={styles.appContainer}>
      <IndividualSwitcher />
      <TableSwitcher />
      <TestingTable />
      <Button text="Submit" colorVariant="secondary" />
      <ResultTable />
    </div>
  );
};
