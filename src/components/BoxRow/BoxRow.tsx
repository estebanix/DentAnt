import styles from "./BoxRow.module.scss";
import { ReactNode } from "react";

interface BoxRowProps {
    children: ReactNode;
}

export const BoxRow: React.FC<BoxRowProps> = ({ children }) => {
    return (
        <div className={styles.boxRowContainer}>
            {children}
        </div>
    );
};

