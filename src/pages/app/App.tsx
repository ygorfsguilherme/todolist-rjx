import { Button } from "componets/Button";
import { Input } from "componets/Input";
import { Label } from "componets/Label";
import { List } from "componets/List";
import { useState } from "react";
import { Item } from "type/Item";
import { v4 as uuidv4 } from "uuid";
import "./App.css";


function App() {
  const [Item, setItem] = useState<Item[]>([]);

  const [Valor, setValor] = useState("");

  function pegaPalavra() {
    setItem([...Item, { tarefa: Valor, checked: false, id: uuidv4() }]);
    setValor("");
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>Minha Simple Lista</div>

        <Label Text={"Tarefas"} />

        <div className="container">
          <Input Valor={Valor} setValor={setValor} />
          <Button onClick={pegaPalavra}>+</Button>
        </div>

        <List Item={Item} setItem={setItem} />
      </div>
    </div>
  );
}

export default App;
