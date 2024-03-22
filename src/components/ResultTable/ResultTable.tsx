import { useContext } from "react";
import { Context } from "../../context/Context";

import styles from "./ResultTable.module.scss";

export const ResultTable = () => {
  const {testingData} = useContext(Context);
  console.log(testingData)
  return (
      <table className={styles.table}>
        
      </table>
  );
};
