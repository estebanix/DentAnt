import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Button } from "../Button";
import { calculateSum } from "../../utils/functions/calculateSum";

import styles from "./ResultTable.module.scss";

export const ResultTable = () => {
  const { testingData } = useContext(Context);
  const [sum, setSum] = useState(Number);

  const performCalculation = () => {
    const sumResult = calculateSum(testingData);
    setSum(sumResult);
  };

  return (
    <>
      <Button
        text="Submit"
        colorVariant="secondary"
        reaction={performCalculation}
      />
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.td}>{sum}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
