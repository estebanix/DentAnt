import { createContext, useState } from 'react';

export interface ContextType {
    siteValue: number;
    setSiteValue: (value: number) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
    const [siteValue, setSiteValue] = useState(1);
    
    return (
        <Context.Provider
            value={{
                siteValue,
                setSiteValue
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;