import '../styles/Login.css'
import logo from '../img/logo.png'
import useAuth from '../Auth/useAuth';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import postToken from '../services/postToken';
import { useEffect, useState } from 'react';


const Login = () => {

  const { register, handleSubmit,reset } = useForm()
  const [dataForm, setDataForm] = useState()

  let history = useHistory()
  const location = useLocation();
  const previusObjectURL = location.state?.from

  const auth = useAuth()

  const handleLogin = (data) => {
    setDataForm(data)
    reset()
  }

  useEffect(()=> {
    if(dataForm){
    const postFunc = async () => {
    const datauser = await postToken(dataForm)
    if(datauser){
      auth.login(datauser.name);
      auth.upToken(datauser.Authorization || localStorage.getItem("token"))
      history.push(previusObjectURL || '/pages')
    } 
  }
    postFunc() 
  }
  },[dataForm])

  return (
    <div className="Login">
      <div className="LoginContainer">
        <img width="30%" src={logo} alt="Logo"></img>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div><input {...register("username", {required: true})} placeholder={"User"}></input></div>
          <div><input {...register("password", {required: true})} placeholder={"password"}></input></div>
          <button >Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
