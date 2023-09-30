import styles from "./BoxColumn.module.scss";
import { ReactNode } from "react";

interface BoxColumnProps {
    children: ReactNode;
}

export const BoxColumn: React.FC<BoxColumnProps> = ({ children }) => {
    return (
        <div className={styles.boxColumnContainer}>
            {children}
        </div>
    );
};