import { createContext, useState } from "react";

export interface ContextType {
  siteValue: number;
  setSiteValue: (value: number) => void;
  sumData: object;
  setSumData: (value: object) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [siteValue, setSiteValue] = useState(1);
  const [sumData, setSumData] = useState({});

  return (
    <Context.Provider
      value={{
        siteValue,
        setSiteValue,
        sumData,
        setSumData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
