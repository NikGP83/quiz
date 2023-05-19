import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.one}>
      <Link className={styles.play_button} href='/game'>Жми, давай играть и отгадывать!</Link>
    </div>
  )
}
