import styles from "./Input.module.css";
interface LabelProps {
  leftInput: string;
  rightInput: string;
  inputField: string;
}
export function Input({ leftInput, rightInput, inputField }: LabelProps) {
  return (
    <div className={styles.input}>
      <h2>{inputField}</h2>
      <div>
        <label>
          {leftInput}
          <input type="text" name={leftInput} />
        </label>

        <label>
          {rightInput}
          <input type="text" name={rightInput} />
        </label>
      </div>
    </div>
  );
}
