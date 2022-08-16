import styles from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  setText?: (text: string) => void;
  onClick?: () => void;
}

export function Button({ children, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
