//import { DataUploader } from "../../../components/DataUploader";
import { Button } from "../../../components/Button";
import { InputTable } from "../../../components/InputTable";
import { useContext, useState } from "react";
import { ResultTable } from "../../../components/ResultTable";
import { TableSwitcher } from "../../../components/TableSwitcher";

import styles from "./AppContainer.module.scss";
import { Context } from "../../../context/Context";

export const AppContainer = () => {
  const [sum, setSum] = useState("");
  const { sumData } = useContext(Context);

  const makeSum = () => {
    let totalSum = 0;
  
    if (Array.isArray(sumData)) {
      sumData.forEach((row, rowIndex) => {
        row.forEach((cell: string, cellIndex: number) => {
          if (rowIndex > 0 && cellIndex > 0) {
            const numericValue = isNaN(parseInt(cell as string, 10)) ? 0 : parseInt(cell as string, 10);
            totalSum += numericValue;
          }
        });
      });
    }
  
    setSum(totalSum.toString());
  };
  

  return (
    <div className={styles.appContainer}>
      {/*<DataUploader />*/}
      <TableSwitcher />
      <InputTable />
      <Button text="Submit" colorVariant="secondary" reaction={makeSum} />
      <p>Sum is: {sum}</p>
      <ResultTable />
    </div>
  );
};
