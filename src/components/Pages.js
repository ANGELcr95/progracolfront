import { useHistory, useLocation} from 'react-router-dom';
import '../styles/Pages.css'
import useAuth from '../Auth/useAuth';


const Pages = ()  => {

  const auth = useAuth()
  const history =  useHistory()
  const location = useLocation()

  const chanheLigth = () => {
    console.log(auth.ligth)
    if(auth.ligth == "black"){
      auth.upLigth("white")  

    } else {
      auth.upLigth("black")
    }
  }

  const handleFiguras =()=> {
   history.push(`${location.pathname}/figura`)
  }
  return (
    <div className="Pages" style={{backgroundColor: auth.ligth}}>
      <h1 style={{color:"grey"}}>{auth.user}</h1>
      <button onClick={chanheLigth}>Day/Nigth</button>
      <button onClick={handleFiguras}
      >ListarFiguras</button>
       <button onClick={auth.logout}
      >Salir</button>
    </div>

  );
}

export default Pages;
