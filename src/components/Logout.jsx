import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/action";
import { useDispatch } from "react-redux";

export const Logout = () => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const logout1 =()=>{
      dispatch(logout())
      navigate("/")
  }
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  return <> <button onClick={()=>{logout1()}}>Logout</button> </>;
};