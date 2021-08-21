import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import getData from '../services/getData';
import Tetris from './Tetris';

const Figura = ()  => {

    const[figures, setFigures] = useState([])
    const[positionFigures, setPositionFigures] =useState([])
    const history = useHistory()
    const auth = useAuth()

      
  const chanheLigth = () => {
    console.log(auth.ligth)
    if(auth.ligth == "black"){
      auth.upLigth("white")  

    } else {
      auth.upLigth("black")
    }
  }

    const handleBack =()=> {
        history.push('/pages')
    }

    useEffect(()=> {
        if(auth.tokenAuth){
          const getFunc = async () => {
            const data = await getData(auth.tokenAuth)
            setFigures(data)
            setPositionFigures(data.data)
          }
          getFunc()
        }
       
    },[auth.tokenAuth])

    localStorage.setItem('token', auth.tokenAuth);


    const listRenderTetris = positionFigures.map(Figures => <Tetris key={Figures.id} name={Figures.name} postionsWinner={Figures.positionsWinner}/>)
    
    console.log(positionFigures)

  return (
    <div className="Figura" style={{backgroundColor: auth.ligth}}>
       <button onClick={chanheLigth}>Day/Nigth</button>
      <button onClick={handleBack}
      >Ir a perfil</button>
      <button onClick={auth.logout}
      >Salir</button>
      <h2 style={{color: 'grey'}}>{figures.message}</h2>
      {listRenderTetris}

    </div>
    

  );
}

export default Figura;