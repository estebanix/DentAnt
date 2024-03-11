import { Context } from "../../context/Context";
import { useContext } from "react";

import individuals from "./../../data/individuals.json";

import styles from "./IndividualSwitcher.module.scss";

interface Individual {
    id: number;
    name: string;
  }

export const IndividualSwitcher = () => {
  const { currentIndividual, setCurrentIndividual } = useContext(Context);

  const handle = (individual: Individual) => {
    setCurrentIndividual(individual.id);
  };

  return (
    <>
      <div className={styles.tableSwitcher}>
        {individuals.map((individual) => {
          return (
            <p
              className={`${styles.tableSwitcherBtn} ${
                currentIndividual === individual.id ? styles.active : ""
              }`}
              key={individual.id}
              onClick={() => handle(individual)}
            >
              {individual.name}
            </p>
          );
        })}
      </div>
    </>
  );
};
