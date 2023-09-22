import { signInWithPopup } from "firebase/auth";
import "../css/Login.css";
import { auth, provider } from "../firebase";

const Login = () => {

  const handleLogin = async() =>{
await signInWithPopup(auth , provider)
.then((result)=>{
 console.log(result);
})
.catch((e)=>{
  console.log(e);
})
  }
  return (
    <>
    <div className="main">
      <div className="container login-container">
        <img src="https://images.unsplash.com/photo-1649180573784-bd23dbe5606a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvcmElMjAzZCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Quora Logo" className="quora-logo "/>
        <br/>
        <button className="login-button btn btn-dark mt-2" onClick={handleLogin}>Login to Continue</button>
    </div>
    </div>
    </>
  );
};
export default Login;
