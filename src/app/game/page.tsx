'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import QuestionList from '@/components/question-list/question-list';
import { questions } from '@/mock/mock';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game',
};

function Game() {
  const [step, setStep] = useState<number>(0);
  const question = questions[step];
  const getVariant = (index: number) => {
    console.log(index, step)
    setStep(step + 1);
  }
  return (
    <>
      <div className={styles.game_block_wrapper}>
        <div className={styles.game_block}>
          <div className={styles.progress_bar}></div>
          <QuestionList question={question}  getVariant={getVariant}/>
        </div>
      </div>
    </>
  );
}

export default Game;
