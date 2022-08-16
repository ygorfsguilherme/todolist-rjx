import styles from "./List.module.scss";
import iconExcluir from "../../assets/trash.svg";
import { Item } from "type/Item";

import classNames from "classnames";

export function List({
  Item,
  setItem,
}: {
  Item: Item[];
  setItem: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  function removeItem(e: React.ChangeEvent<HTMLInputElement> | any) {
    e.target.parentElement.parentElement.remove();
  }

  function ativa(e: React.ChangeEvent<HTMLInputElement> | any) {
    setItem(
      Item.map((item) => {
        if (item.id === e.target.parentElement.parentElement.id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  }

  return (
    <ul className={styles.list}>
      {Item.map((item) => (
        <li id={item.id} key={item.id}>
          {item.tarefa}

          <div className={styles.container__check}>
            <div
              onClick={ativa}
              className={classNames(
                styles.check,
                `${item.checked ? styles.ativo : ""}`
              )}
            ></div>{" "}
            <img onClick={removeItem} src={iconExcluir} alt="X" />
          </div>
        </li>
      ))}
    </ul>
  );
}
