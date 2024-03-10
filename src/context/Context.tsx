import { createContext, useState } from "react";

export interface ContextType {
  siteValue: number;
  setSiteValue: (value: number) => void;
  sumData: object;
  setSumData: (value: object) => void;
  currentTable: number;
  setCurrentTable: (value: number) => void;
  currentIndividual: string;
  setCurrentIndividual: (value: string) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [siteValue, setSiteValue] = useState(1);
  const [sumData, setSumData] = useState({});
  const [currentTable, setCurrentTable] = useState(1);
  const [currentIndividual, setCurrentIndividual] = useState("")

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
        setCurrentIndividual
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
