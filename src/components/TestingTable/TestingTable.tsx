import { Context } from "../../context/Context";
import { useContext } from "react";

import styles from "./TestingTable.module.scss";

interface TestData {
  individuals?: { id: number; data: string[][] }[]; 
}

export const TestingTable = () => {
  const { testingData, currentIndividual } = useContext(Context) as { testingData: TestData, currentIndividual: number};

  const currentInd = testingData?.individuals?.find(
    (individual) => individual.id === currentIndividual
  );

  return (
    <div className={styles.tableContainer}>
      {currentInd?.data?.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {Array.isArray(row) &&
            row.map((cell, cellIndex) => (
              <p key={cellIndex} className={styles.cell}>
                {cell}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};
