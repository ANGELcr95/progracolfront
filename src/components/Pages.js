import { useHistory, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import getProfile from '../services/getProfile';
import useAuth from '../Auth/useAuth';
import perfil from '../img/perfil.png'
import '../styles/Pages.css'
import '../styles/Name.css'

const Pages = ()  => {
  
  const[profile, setProfile] = useState([])

  const auth = useAuth()
  const history =  useHistory()
  const location = useLocation()
  
  useEffect(()=> {
    if(auth.tokenAuth){
      const getFunc = async () => {
        const data = await getProfile(auth.tokenAuth)
        setProfile(data.data )
      }
      getFunc()
    }
   
  },[auth.tokenAuth])

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
       <div class="bg-5">
          <h1 class="animated-shadow">{auth.user}</h1>
        </div>
      <div className="PagesContainer">
       
        <div className="NavBar">
          <button onClick={chanheLigth}>Day/Nigth</button>
          <button onClick={handleFiguras}
          >ListFigures</button>
          <button onClick={auth.logout}
          >LogOut</button>
        </div>
        <div className="Profile">
          <div className="DataProfile">
            <h2>Name: {profile.names}</h2>
            <h2>Last Name: {profile.lastNames}</h2>
            <h2>Name of User: {profile.username}</h2>
            <h2>Rol: {profile.lastNames}</h2>
          </div>
          <div className="ImgProfile">
            <img src={perfil}  alt="Perfil"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
