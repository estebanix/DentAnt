import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    colorVariant: 'primary' | 'secondary'; // Define colorVariant prop
}

export const Button: React.FC<ButtonProps> = ({ text, colorVariant }) => {
    const buttonClass = colorVariant === 'primary' ? styles.primary : styles.secondary;

    return (
        <button className={`${styles.button} ${buttonClass}`}>
            {text}
        </button>
    );
};
