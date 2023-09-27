import React from 'react';
import styles from './Article.module.scss';

interface ArticleProps {
    title: string;
    text: string;
    right: boolean;
}

export const Article: React.FC<ArticleProps> = ({ title, text, right }) => {
    const containerClassName = right ? styles.articleContainer + ' ' + styles.right : styles.articleContainer + ' ' + styles.left;

    return (
        <div className={containerClassName}>
            <h2 className={styles.articleTitle}>{title}</h2>
            <p className={styles.articleParag}>{text}</p>
        </div>
    );
};
