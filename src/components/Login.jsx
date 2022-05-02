
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../Redux/actions';

export const Login = () => {
  const auth = useSelector((store)=>store.users);
  const[name,setName] = useState("");
  const [pass,setPass] =useState("");
  const dispatch = useDispatch()

const handleAuth=()=>{
  dispatch(user({name,pass}))
}
  return (
    <div>
      <input
      onChange={(e)=>{setName(e.target.value)}}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
      onChange={(e)=>{setPass(e.target.value)}}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      {auth.role==="admin" ? <Navigate to="/orders"/> : <Navigate to="/neworder"/>}
      <button className="submit" onClick={()=>{handleAuth}}>Login</button>
    </div>
  );
};