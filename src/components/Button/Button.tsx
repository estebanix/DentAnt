import styles from "./Button.module.scss"

interface ButtonPropt {
    text: string;
}

export const Button: React.FC <ButtonPropt> = ({text}) => {
    return(
        <button className={styles.button}>
            {text}
        </ button>
    );
}