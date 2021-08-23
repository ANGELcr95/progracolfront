import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import getData from '../services/getData';
import Tetris from './Tetris';
import '../styles/Figura.css'
import '../styles/Name.css'

const Figura = ()  => {

  const[figures, setFigures] = useState([])
  const[positionFigures, setPositionFigures] =useState([])
  
  const history = useHistory()
  const auth = useAuth()

  useEffect(()=> {
    if(auth.tokenAuth){
      const getFunc = async () => {
        const data = await getData(auth.tokenAuth )
        setFigures(data)
        setPositionFigures(data.data)
      }
      getFunc()
    }
  },[auth.tokenAuth])

  const handleListFiguras =()=> {
    history.push('/listafiguras')
  }
  
  const chanheLigth = () => {
    if(auth.ligth == "black"){
      auth.upLigth("white")  
    } else {
      auth.upLigth("black")
    }
  }
  
  const handleBack =()=> {
    history.push('/pages')
  }
  
  const listRenderTetris = positionFigures.map(Figures => <Tetris key={Figures.id} name={Figures.name} postionsWinner={Figures.positionsWinner}/>)

  return (
    <div className="Figura" style={{backgroundColor: auth.ligth}}>
      <div class="bg-5">
        <h1 class="animated-shadow">{auth.user}</h1>
      </div >
      <div className="NavBar">
        <button onClick={chanheLigth}>Day/Nigth</button>
        <button onClick={handleBack}
        >Ir a perfil</button>
        <button onClick={handleListFiguras}
        >ListarFiguras</button>
        <button onClick={auth.logout}
        >Salir</button>
      </div>
      <div className="Madality">
        <h2 >{figures.message}</h2>
      </div>
      <div className="FiguraTetris">
        {listRenderTetris}
      </div>
    </div>
  );
}

export default Figura;