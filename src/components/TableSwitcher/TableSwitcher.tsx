import { Context } from "../../context/Context";
import { useContext } from "react";

import styles from "./TableSwitcher.module.scss";

export const TableSwitcher = () => {
  const { currentTable, setCurrentTable } = useContext(Context);
  const a = [1, 2, 3];

  const handle = (id: number) => {
    setCurrentTable(id);
    console.log(id);
  };
  return (
    <>
      <div className={styles.tableSwitcher}>
        {a.map((table) => {
          return (
            <p
            className={`${styles.tableSwitcherBtn} ${currentTable === table ? styles.active : ''}`}
              key={table}
              onClick={() => handle(table)}
            >
              Table{table}
            </p>
          );
        })}
      </div>
    </>
  );
};
