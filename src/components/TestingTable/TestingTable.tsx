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
      <table className={styles.table}>
        <thead>
          <tr>
            {currentPage?.data[0].map((header, headerIndex) => (
              <th key={headerIndex}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPage?.data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
