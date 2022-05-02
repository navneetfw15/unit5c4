// action types
import  axios  from 'axios';
export const USER =  "USER";

// Action Creators
export const user = (name,pass) => (dispatch) =>{
    axios.get("http://localhost:8080/users",{
        params:{username: name,
          pass: pass}
      }).then((x) => dispatch(setUser(x.data))).catch((err)=>console.log(err));
}

export const setUser =(data) =>{
    return{
        type : USER,
        payload : data
    }
}
