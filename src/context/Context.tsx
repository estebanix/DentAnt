import { createContext, useEffect, useState } from "react";
import individualsData from "./../data/individualsData.json";

export interface ContextType {
  siteValue: number;
  setSiteValue: (value: number) => void;
  sumData: object;
  setSumData: (value: object) => void;
  currentTable: number;
  setCurrentTable: (value: number) => void;
  currentIndividual: number;
  setCurrentIndividual: (value: number) => void;
  testingData: object;
  setTestingData: (value: object) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [siteValue, setSiteValue] = useState(1);
  const [sumData, setSumData] = useState({});
  const [currentTable, setCurrentTable] = useState(1);
  const [currentIndividual, setCurrentIndividual] = useState(1);
  const [testingData, setTestingData] = useState({});

  useEffect(() => {
    setTestingData(individualsData);
  }, [1])

  return (
    <Context.Provider
      value={{
        siteValue,
        setSiteValue,
        sumData,
        setSumData,
        currentTable,
        setCurrentTable,
        currentIndividual,
        setCurrentIndividual,
        testingData,
        setTestingData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
