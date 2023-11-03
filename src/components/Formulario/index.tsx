import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../types/ITarefa';
import {v4 as uuidv4} from 'uuid';


class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {

  state = {
    //dois states para pegar os valores controlaveis, para ser possivel verificar se foi alterado 
    tarefa: "",
    tempo: "00:00"
  }

  addTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)} >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={e => this.setState({...this.state, tarefa: e.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo} //state e setState funcionar sem importar por ser uma classComponent
            onChange={e => this.setState({...this.state, tempo: e.target.value})} // recebe o valor atual
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;