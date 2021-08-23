import { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import getListaFiguras from '../services/getListaFiguras';
import { useForm } from "react-hook-form";
import postTetris from '../services/postTetris';
import '../styles/ListaFigura.css';
import '../styles/Name.css'

const ListaFigura = ()  => {

  const [listaFigures, setListaFigures] = useState([])
  const [boolean, setBoolean] = useState([])
  const {register, handleSubmit, reset} = useForm()

  const history = useHistory()
  const auth = useAuth()

  useEffect(()=> {
    if(auth.tokenAuth){
      const getFunc = async () => {
        const data = await getListaFiguras(auth.tokenAuth)
        setListaFigures(data.data)

        console.log(data.data)
      }
      getFunc()
    }
  },[auth.tokenAuth])

  const chanheLigth = () => {
    if(auth.ligth == "black"){
      auth.upLigth("white")  
    } else {
      auth.upLigth("black")
    }
  }

  const handleBack =()=> {
      history.push('pages/figura')
  }
  
  const onSubmit = (todo) => {

    let positions = [] 
    for (const property in todo) {
      if (Object.hasOwnProperty.call(todo, property)) {
        if(todo[property] == true || todo[property] == false){
          if(todo[property] == true){
            positions[positions.length] = true   
          } else {
            positions[positions.length] = false   
          }
        }
      }
    }

    let id_grupofigure = null
    let figurename = todo.figurename
    let grupofigure = todo.grupofigure
    

    for (let i = 0; i < listaFigures.length; i++) {
      if(grupofigure == listaFigures[i].name){
        id_grupofigure =listaFigures[i].id
      }
    }

    const info ={
      "idFigureGroup": id_grupofigure,
      "figureName": figurename,
      "positions":positions
    }

    if(auth.tokenAuth){
      const postFunc = async () => {
        const res = await postTetris(info,auth.tokenAuth)
        reset()
        console.log(res)
      }
      postFunc()
    }
  }

  const array = []
    for (let i = 0; i < 25; i++) {
    array.push(i)
  }

  const nameListFigures = listaFigures.map(nameListFigures => <option value={nameListFigures.name}>{nameListFigures.name}</option> )

  const tetrispush = array.map(id => <label htmlFor={id}><input type="checkbox"  key={id} id={id} {...register(`${id}`)}></input></label>)

  return (
    <div className="Figura" style={{backgroundColor: auth.ligth}}>
      <div class="bg-5">
          <h1 class="animated-shadow">{auth.user}</h1>
      </div>
      <div className="NavBar"> 
        <button id="hola" onClick={chanheLigth}>Day/Nigth</button>
        <button onClick={handleBack}
        >Ir a Figuras</button>
        <button onClick={auth.logout}
        >Salir</button>
      </div>
      <form onSubmit ={handleSubmit(onSubmit)}>
        <div className="content-select">
         <select name="" {...register('grupofigure',{ required: true })}>
          { nameListFigures }
         </select>
        </div>
        <div className="FigureName">
          <input type="text" placeholder="Name Figure"{...register('figurename',{ required: true })}></input>
        </div>
        <div className="Tetrispush">
          <div className="TetrisPushButton">
            {tetrispush}
          </div>
          <div className="SendFigure">
            <button> SendFigure </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ListaFigura;