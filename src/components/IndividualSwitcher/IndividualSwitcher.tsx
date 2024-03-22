import { useContext } from "react";
import { Context } from "../../context/Context";
import individuals from "../../data/individuals.json";
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

  const individualsMap = Array.isArray(currentIndividual) && currentIndividual.length > 0 ? currentIndividual : individuals;

  return (
    <div className={styles.tableSwitcher}>
      {individualsMap.map((individual) => (
        <p
          className={`${styles.tableSwitcherBtn} ${currentIndividual === individual.id ? styles.active : ""}`}
          key={individual.id}
          onClick={() => handle(individual)}
        >
          {individual.name}
        </p>
      ))}
    </div>
  );
};
