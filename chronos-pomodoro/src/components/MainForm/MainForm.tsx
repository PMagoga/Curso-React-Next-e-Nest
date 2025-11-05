import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../DefaultInput";

export function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <Input
          labelText="Alguma Coisa"
          id="meuInput"
          type="text"
          placeholder="Digite Algo"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
