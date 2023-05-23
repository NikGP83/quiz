import Link from 'next/link';
import React from 'react';
import styles from './result.module.css';

interface ResultProps {
  correctAnswer: number;
  questionsLength: number;
}

function Result({ correctAnswer, questionsLength }: ResultProps) {
  return (
    <>
      <h3>Ваш результат:</h3>
      <div className={styles.result_text}>
        {correctAnswer} из {questionsLength} вопросов
      </div>
      {correctAnswer === questionsLength ? <h2 className={styles.regard}>Вы большой молодец!!!</h2>
      :<h2 className={styles.regard}>Не унывайте, дождь не может идти вечно, победите в следующий раз</h2>
      }
      <Link className={styles.button} href={'/'}>Вернуться на главную</Link>
    </>
  );
}

export default Result;
