import { Context } from "../../context/Context";
import { useContext } from "react";

import styles from "./TestingTable.module.scss";

interface TestData {
  individuals?: { id: number; pages: { pageTitle: string; data: string[][] }[] }[];
}

export const TestingTable = () => {
  const { testingData, currentIndividual, currentTable } = useContext(Context) as {
    testingData: TestData;
    currentIndividual: number;
    currentTable: number;
  };

  const currentInd = testingData?.individuals?.find(
    (individual) => individual.id === currentIndividual
  );

  const currentPage = currentInd?.pages.find((page) => page.pageTitle === `Season ${currentTable}`);

  return (
    <div className={styles.tableContainer}>
      {currentPage?.data.map((row, rowIndex) => (
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
