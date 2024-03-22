import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Button } from "../Button";

import styles from "./ResultTable.module.scss";

export const ResultTable = () => {
  const { testingData } = useContext(Context);
  const [sum, setSum] = useState(Number);

  const performCalculation = () => {
    let sum = 0;
    testingData.individuals.forEach((individual) => {
      individual.pages.forEach((page) => {
        page.data.forEach((row) => {
          row.forEach((cell) => {
            if (!isNaN(cell)) {
              sum += parseInt(cell);
            }
          });
        });
      });
    });
    setSum(sum);
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
