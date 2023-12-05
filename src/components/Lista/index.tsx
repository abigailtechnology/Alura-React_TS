import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import style from "./Lista.module.scss";
import Item from "./Item/Item";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  //Ao mudar o estado o react renderiza novamente o item
  //o set em setTarefas é seguindo o padrão de setState que era a função antigamente para mudar estado

  //State com valores fixos
  // const [tarefas,setTarefas] = useState([{
  //   tarefa: 'React',
  //   tempo: '02:00:00'
  // }, {
  //   tarefa: 'Javascript',
  //   tempo: '01:00:00'
  // }, {
  //   tarefa: "Typescript",
  //   tempo: "03:00:00"
  // }]);

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
