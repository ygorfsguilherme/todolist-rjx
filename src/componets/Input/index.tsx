import styles from "./Input.module.scss";
import { Dispatch, SetStateAction } from "react";

interface Props {
  Valor: string;
  setValor: Dispatch<SetStateAction<string>>;
}

export function Input({ Valor, setValor }: Props) {
  function valorInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValor(e.target.value);
  }

  return (
    <input
      className={styles.pesquisa}
      value={Valor}
      onChange={valorInput}
    ></input>
  );
}
