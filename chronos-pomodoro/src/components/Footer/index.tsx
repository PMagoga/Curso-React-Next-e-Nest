import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">Entenda como funciona a técnica Pomodoro</a>Chronos Pomodoro
      &copy; {new Date().getFullYear()}
      <a href="#"></a>
    </footer>
  );
}
