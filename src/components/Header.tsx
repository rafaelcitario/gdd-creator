import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <h1>Game Design Document</h1>
      <div>
        <label>
          Date:
          <input type="date" name="date" id="date" />
        </label>
        <label>
          Name:
          <input type="text" />
        </label>
      </div>
    </header>
  );
}
