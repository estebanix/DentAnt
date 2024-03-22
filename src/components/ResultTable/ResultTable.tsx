import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Button } from "../Button";
import { calculateSum } from "../../utils/functions/calculateSum";
import { calculateMean } from "../../utils/functions/calculateMean";
import { TestingData } from "../../utils/types/functionsTypes";

import styles from "./ResultTable.module.scss";

export const ResultTable = () => {
  const { testingData } = useContext(Context) as { testingData: TestingData };
  const [sum, setSum] = useState(0);
  const [mean, setMean] = useState(0);

  const performCalculation = (data: TestingData) => {
    const sumResult = calculateSum(data);
    setSum(sumResult);
    const meanResult = calculateMean(data);
    setMean(meanResult);
  };

  return (
    <>
      <Button
        text="Submit"
        colorVariant="secondary"
        reaction={() => performCalculation(testingData)}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Sum</th>
            <th>Mean</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sum}</td>
            <td>{mean.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
