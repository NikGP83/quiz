'use client';
import React from 'react';
import { Questions } from '@/types/types';
import styles from './question-list.module.css';

interface QuestionListProps  {
  question: Questions;
  getVariant: (index: number) => void
}

function QuestionList({getVariant, question}: QuestionListProps) {
  const { title, variants, correct } = question;
  return (
    <>
      <h1 className={styles.question_title}>{title}</h1>
      <ul className={styles.question_list}>
        {variants.map((item, i) => (
          <li onClick={() => getVariant(i)} className={styles.question_item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuestionList;
