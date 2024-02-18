//import { DataUploader } from "../../../components/DataUploader";
import { Button } from "../../../components/Button";
import { InputTable } from "../../../components/InputTable";
import { useState } from "react";

import styles from "./AppContainer.module.scss";

export const AppContainer = () => {
  const { sum, setSum } = useState("");

  const makeSum = () => {
    let totalSum = 0;
  
    data.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (rowIndex > 0 && cellIndex > 0) {
          const numericValue = isNaN(parseInt(cell as string, 10)) ? 0 : parseInt(cell as string, 10);
          totalSum += numericValue;
        }
      });
    });
  
    setSum(totalSum.toString());
  };

  return (
    <div className={styles.appContainer}>
      {/*<DataUploader />*/}
      <InputTable />
      <Button text="Submit" colorVariant="secondary" reaction={makeSum}/>
      <p>Sum is: {sum}</p>
    </div>
  );
};
