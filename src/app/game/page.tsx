'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import QuestionList from '@/components/question-list/question-list';
import { questions } from '@/mock/mock';
import { Metadata } from 'next';
import Result from '@/components/result/result';

export const metadata: Metadata = {
  title: 'Game',
};

function Game() {
  const [step, setStep] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const question = questions[step];
  const questionsLength = questions.length;
  const getVariant = (index: number) => { 
     setStep(step + 1);
     if(index === question.correct){
      setCorrectAnswer( correctAnswer + 1);
     }
  }


  const percentage = Math.round((step / questionsLength) * 100);

  return (
    <>
      <div className={styles.game_block_wrapper}>
        <div className={styles.game_block}>
          <div className={styles.progress_bar}>
            <div style={{width: `${percentage}%`}} className={styles.progress_bar_inner}></div>
          </div>
          {step < questionsLength ?<QuestionList step={step} question={question}  getVariant={getVariant}/>
          : <Result correctAnswer={correctAnswer} questionsLength={questionsLength}/>
          }
        </div>
      </div>
    </>
  );
}

export default Game;
